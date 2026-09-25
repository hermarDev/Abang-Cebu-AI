import Link from "next/link";
import { Building2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-bold text-lg text-emerald-600 dark:text-emerald-400">
              <Building2 className="h-5 w-5" />
              <span>Abang Cebu AI</span>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Cebu’s AI-powered rental marketplace. Verified properties, barangay safety badges, and direct landlord connections.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Popular Locations</h4>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li><Link href="/search?city=Cebu+City&barangay=Apas" className="hover:text-emerald-600">Cebu IT Park (Apas)</Link></li>
              <li><Link href="/search?city=Cebu+City&barangay=Lahug" className="hover:text-emerald-600">Lahug</Link></li>
              <li><Link href="/search?city=Cebu+City&barangay=Banilad" className="hover:text-emerald-600">Banilad</Link></li>
              <li><Link href="/search?city=Mandaue+City" className="hover:text-emerald-600">Mandaue City</Link></li>
              <li><Link href="/search?city=Lapu-Lapu+City" className="hover:text-emerald-600">Mactan / Lapu-Lapu</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">For Landlords</h4>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li><Link href="/landlord/properties/new" className="hover:text-emerald-600">Post a Property</Link></li>
              <li><Link href="/how-it-works" className="hover:text-emerald-600">Verification Guide</Link></li>
              <li><Link href="/landlord/dashboard" className="hover:text-emerald-600">Landlord Portal</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Safety & Trust</h4>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li><Link href="/about" className="hover:text-emerald-600">Anti-Scam Guarantee</Link></li>
              <li><Link href="/how-it-works" className="hover:text-emerald-600">Barangay Clearance</Link></li>
              <li><Link href="/about" className="hover:text-emerald-600">Terms & Privacy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-zinc-100 pt-6 text-center text-xs text-zinc-400 dark:border-zinc-800">
          © {new Date().getFullYear()} Abang Cebu AI. Built for the Queen City of the South.
        </div>
      </div>
    </footer>
  );
}
