import { UserRole } from "@/types/user";

export type Permission =
  | "create:property"
  | "edit:property"
  | "delete:property"
  | "view:inquiries"
  | "send:inquiry"
  | "submit:verification"
  | "review:verification"
  | "manage:users"
  | "view:admin_dashboard";

const ROLE_PERMISSIONS: Record<UserRole, Permission[]> = {
  renter: [
    "send:inquiry",
    "submit:verification",
  ],
  landlord: [
    "create:property",
    "edit:property",
    "delete:property",
    "view:inquiries",
    "submit:verification",
  ],
  admin: [
    "create:property",
    "edit:property",
    "delete:property",
    "view:inquiries",
    "send:inquiry",
    "submit:verification",
    "review:verification",
    "manage:users",
    "view:admin_dashboard",
  ],
};

export function hasPermission(role: UserRole | undefined | null, permission: Permission): boolean {
  if (!role) return false;
  return ROLE_PERMISSIONS[role]?.includes(permission) ?? false;
}
