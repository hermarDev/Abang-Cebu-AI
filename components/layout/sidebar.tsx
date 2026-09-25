"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Home,
  MessageSquare,
  Bookmark,
  ShieldCheck,
  User,
  Settings,
  PlusCircle,
  Users,
  Flag,
} from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const RENTER_NAV: NavItem[] = [
  { label: "Dashboard", href: "/renter/dashboard", icon: LayoutDashboard },
  { label: "Saved Properties", href: "/renter/saved", icon: Bookmark },
  { label: "My Inquiries", href: "/renter/inquiries", icon: Home },
  { label: "Messages", href: "/renter/messages", icon: MessageSquare },
  { label: "Verification", href: "/renter/verification", icon: ShieldCheck },
  { label: "Profile", href: "/renter/profile", icon: User },
];

const LANDLORD_NAV: NavItem[] = [
  { label: "Dashboard", href: "/landlord/dashboard", icon: LayoutDashboard },
  { label: "My Listings", href: "/landlord/properties", icon: Home },
  { label: "Add Listing", href: "/landlord/properties/new", icon: PlusCircle },
  { label: "Inquiries", href: "/landlord/inquiries", icon: MessageSquare },
  { label: "Verification", href: "/landlord/verification", icon: ShieldCheck },
  { label: "Profile", href: "/landlord/profile", icon: User },
];

const ADMIN_NAV: NavItem[] = [
  { label: "Overview", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Users", href: "/admin/users", icon: Users },
  { label: "Properties", href: "/admin/properties", icon: Home },
  { label: "Verifications", href: "/admin/verification", icon: ShieldCheck },
  { label: "Reports", href: "/admin/reports", icon: Flag },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

export function Sidebar({ role }: { role: "renter" | "landlord" | "admin" }) {
  const pathname = usePathname();

  const navItems =
    role === "admin"
      ? ADMIN_NAV
      : role === "landlord"
      ? LANDLORD_NAV
      : RENTER_NAV;

  return (
    <aside className="hidden md:flex w-64 flex-col border-r border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 p-4">
      <div className="mb-6 px-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
        {role.toUpperCase()} PORTAL
      </div>
      <nav className="space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300"
                  : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-50"
              )}
            >
              <Icon className="h-4 w-4" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
