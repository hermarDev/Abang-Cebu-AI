"use client";

import Link from "next/link";
import { Building2, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200 bg-white/95 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/95">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-emerald-600 dark:text-emerald-400">
          <Building2 className="h-6 w-6" />
          <span>Abang Cebu</span>
          <span className="rounded-md bg-emerald-100 px-1.5 py-0.5 text-xs font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
            AI
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-300">
          <Link href="/search" className="transition-colors hover:text-emerald-600">
            Search Rentals
          </Link>
          <Link href="/properties" className="transition-colors hover:text-emerald-600">
            All Listings
          </Link>
          <Link href="/how-it-works" className="transition-colors hover:text-emerald-600">
            How it Works
          </Link>
          <Link href="/about" className="transition-colors hover:text-emerald-600">
            About
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/search" className="hidden sm:block">
            <Button variant="ghost" size="icon">
              <Search className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/login">
            <Button variant="outline" size="sm">
              <User className="mr-1.5 h-4 w-4" />
              Sign In
            </Button>
          </Link>
          <Link href="/register">
            <Button size="sm">Get Started</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
