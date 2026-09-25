import { UserProfile } from "./user";

export interface RenterProfile extends UserProfile {
  role: "renter";
  occupation?: string;
  monthlyBudgetMin?: number;
  monthlyBudgetMax?: number;
  preferredCity?: string;
  preferredBarangay?: string;
  savedPropertyIds: string[];
}
