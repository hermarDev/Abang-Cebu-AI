-- Enable UUID generation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- User Roles Enum
CREATE TYPE user_role AS ENUM ('renter', 'landlord', 'admin');
CREATE TYPE property_type AS ENUM ('apartment', 'condominium', 'boarding_house', 'townhouse', 'single_family', 'commercial');
CREATE TYPE property_status AS ENUM ('available', 'rented', 'under_review', 'archived');
CREATE TYPE verification_type AS ENUM ('government_id', 'barangay_clearance', 'property_title', 'utility_bill');
CREATE TYPE verification_status AS ENUM ('pending', 'approved', 'rejected');

-- Profiles Table (Linked to auth.users)
CREATE TABLE public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT NOT NULL,
    full_name TEXT NOT NULL,
    avatar_url TEXT,
    phone_number TEXT,
    role user_role NOT NULL DEFAULT 'renter',
    status TEXT NOT NULL DEFAULT 'active',
    is_verified BOOLEAN NOT NULL DEFAULT false,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Properties Table
CREATE TABLE public.properties (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    landlord_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    property_type property_type NOT NULL,
    price_monthly NUMERIC(10, 2) NOT NULL,
    deposit_months INT NOT NULL DEFAULT 1,
    advance_months INT NOT NULL DEFAULT 1,
    bedrooms INT NOT NULL DEFAULT 1,
    bathrooms INT NOT NULL DEFAULT 1,
    floor_area_sqm NUMERIC(6, 2),
    address TEXT NOT NULL,
    barangay TEXT NOT NULL,
    city TEXT NOT NULL,
    province TEXT NOT NULL DEFAULT 'Cebu',
    lat NUMERIC(9, 6) NOT NULL DEFAULT 10.3157,
    lng NUMERIC(9, 6) NOT NULL DEFAULT 123.8854,
    images TEXT[] DEFAULT '{}',
    amenities TEXT[] DEFAULT '{}',
    rules TEXT[] DEFAULT '{}',
    status property_status NOT NULL DEFAULT 'available',
    is_verified BOOLEAN NOT NULL DEFAULT false,
    ai_safety_score INT,
    ai_summary TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Verifications Table
CREATE TABLE public.verifications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    property_id UUID REFERENCES public.properties(id) ON DELETE CASCADE,
    type verification_type NOT NULL,
    document_url TEXT NOT NULL,
    status verification_status NOT NULL DEFAULT 'pending',
    admin_notes TEXT,
    reviewed_by UUID REFERENCES public.profiles(id),
    reviewed_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Conversations & Messages (Realtime)
CREATE TABLE public.conversations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    property_id UUID REFERENCES public.properties(id) ON DELETE SET NULL,
    participant_ids UUID[] NOT NULL,
    last_message TEXT,
    last_message_at TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE public.messages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    conversation_id UUID NOT NULL REFERENCES public.conversations(id) ON DELETE CASCADE,
    sender_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    recipient_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    is_read BOOLEAN NOT NULL DEFAULT false,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- RLS (Row Level Security)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.properties ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.verifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;

-- Properties: Public can view available properties
CREATE POLICY "Public properties read access" ON public.properties
    FOR SELECT USING (status = 'available' OR auth.uid() = landlord_id);

CREATE POLICY "Landlords can insert properties" ON public.properties
    FOR INSERT WITH CHECK (auth.uid() = landlord_id);

CREATE POLICY "Landlords can update own properties" ON public.properties
    FOR UPDATE USING (auth.uid() = landlord_id);

-- Profiles: Users can read public profiles and edit their own
CREATE POLICY "Public profiles read access" ON public.profiles
    FOR SELECT USING (true);

CREATE POLICY "Users can update own profile" ON public.profiles
    FOR UPDATE USING (auth.uid() = id);

-- Messages: Participants can read/insert messages
CREATE POLICY "Participants can view conversation messages" ON public.messages
    FOR SELECT USING (auth.uid() = sender_id OR auth.uid() = recipient_id);

CREATE POLICY "Participants can insert messages" ON public.messages
    FOR INSERT WITH CHECK (auth.uid() = sender_id);
