export type UserRole = "renter" | "landlord" | "admin";

export type UserStatus = "active" | "suspended" | "pending_verification";

export interface UserProfile {
  id: string;
  email: string;
  fullName: string;
  avatarUrl?: string | null;
  phoneNumber?: string | null;
  role: UserRole;
  status: UserStatus;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
}
