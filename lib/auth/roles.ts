import { UserRole } from "@/types/user";

export const ROLES: Record<string, UserRole> = {
  RENTER: "renter",
  LANDLORD: "landlord",
  ADMIN: "admin",
} as const;

export function isLandlord(role?: UserRole | null): boolean {
  return role === "landlord";
}

export function isRenter(role?: UserRole | null): boolean {
  return role === "renter";
}

export function isAdmin(role?: UserRole | null): boolean {
  return role === "admin";
}
