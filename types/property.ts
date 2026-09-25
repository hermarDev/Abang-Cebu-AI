export type PropertyType =
  | "apartment"
  | "condominium"
  | "boarding_house"
  | "townhouse"
  | "single_family"
  | "commercial";

export type PropertyStatus = "available" | "rented" | "under_review" | "archived";

export interface PropertyCoordinates {
  lat: number;
  lng: number;
}

export interface PropertyAmenity {
  id: string;
  name: string;
  category: "essentials" | "features" | "safety" | "location";
}

export interface Property {
  id: string;
  landlordId: string;
  title: string;
  description: string;
  propertyType: PropertyType;
  priceMonthly: number;
  depositMonths: number;
  advanceMonths: number;
  bedrooms: number;
  bathrooms: number;
  floorAreaSqM?: number | null;
  address: string;
  barangay: string;
  city: string; // e.g. Cebu City, Mandaue City, Lapu-Lapu City, Talisay
  province: string; // Cebu
  coordinates: PropertyCoordinates;
  images: string[];
  amenities: string[];
  rules: string[];
  status: PropertyStatus;
  isVerified: boolean;
  aiSafetyScore?: number | null;
  aiSummary?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface PropertyFilterParams {
  query?: string;
  city?: string;
  barangay?: string;
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  propertyType?: PropertyType;
  verifiedOnly?: boolean;
}
