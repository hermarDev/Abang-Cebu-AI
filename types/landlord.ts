import { UserProfile } from "./user";
import { Property } from "./property";

export interface LandlordProfile extends UserProfile {
  role: "landlord";
  governmentIdType?: string;
  isIdVerified: boolean;
  isBarangayCleared: boolean;
  totalListingsCount: number;
  responseRatePercent?: number;
  averageResponseMinutes?: number;
}

export interface LandlordPublicView {
  id: string;
  fullName: string;
  avatarUrl?: string | null;
  isVerified: boolean;
  memberSince: string;
  responseRatePercent?: number;
  properties: Property[];
}
