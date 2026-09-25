export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string;
          avatar_url: string | null;
          phone_number: string | null;
          role: "renter" | "landlord" | "admin";
          status: string;
          is_verified: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name: string;
          avatar_url?: string | null;
          phone_number?: string | null;
          role?: "renter" | "landlord" | "admin";
          status?: string;
          is_verified?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string;
          avatar_url?: string | null;
          phone_number?: string | null;
          role?: "renter" | "landlord" | "admin";
          status?: string;
          is_verified?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      properties: {
        Row: {
          id: string;
          landlord_id: string;
          title: string;
          description: string;
          property_type: string;
          price_monthly: number;
          deposit_months: number;
          advance_months: number;
          bedrooms: number;
          bathrooms: number;
          floor_area_sqm: number | null;
          address: string;
          barangay: string;
          city: string;
          province: string;
          lat: number;
          lng: number;
          images: string[];
          amenities: string[];
          rules: string[];
          status: string;
          is_verified: boolean;
          ai_safety_score: number | null;
          ai_summary: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          landlord_id: string;
          title: string;
          description: string;
          property_type: string;
          price_monthly: number;
          deposit_months?: number;
          advance_months?: number;
          bedrooms?: number;
          bathrooms?: number;
          floor_area_sqm?: number | null;
          address: string;
          barangay: string;
          city: string;
          province?: string;
          lat: number;
          lng: number;
          images?: string[];
          amenities?: string[];
          rules?: string[];
          status?: string;
          is_verified?: boolean;
          ai_safety_score?: number | null;
          ai_summary?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          landlord_id?: string;
          title?: string;
          description?: string;
          property_type?: string;
          price_monthly?: number;
          deposit_months?: number;
          advance_months?: number;
          bedrooms?: number;
          bathrooms?: number;
          floor_area_sqm?: number | null;
          address?: string;
          barangay?: string;
          city?: string;
          province?: string;
          lat?: number;
          lng?: number;
          images?: string[];
          amenities?: string[];
          rules?: string[];
          status?: string;
          is_verified?: boolean;
          ai_safety_score?: number | null;
          ai_summary?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
}
