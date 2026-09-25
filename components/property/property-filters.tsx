"use client";

import { CEBU_CITIES } from "@/lib/verification/barangay";
import { Button } from "@/components/ui/button";

interface PropertyFiltersProps {
  city?: string;
  minPrice?: number;
  maxPrice?: number;
  onFilterChange: (filters: { city?: string; minPrice?: number; maxPrice?: number }) => void;
}

export function PropertyFilters({
  city,
  minPrice,
  maxPrice,
  onFilterChange,
}: PropertyFiltersProps) {
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex-1 min-w-[160px]">
        <label className="block text-xs font-semibold uppercase text-zinc-500 mb-1">
          City / Municipality
        </label>
        <select
          value={city || ""}
          onChange={(e) => onFilterChange({ city: e.target.value || undefined, minPrice, maxPrice })}
          className="w-full rounded-lg border border-zinc-300 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:border-zinc-700"
        >
          <option value="">All Cebu Locations</option>
          {CEBU_CITIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="w-36">
        <label className="block text-xs font-semibold uppercase text-zinc-500 mb-1">
          Min Rent (PHP)
        </label>
        <input
          type="number"
          placeholder="e.g. 5000"
          value={minPrice || ""}
          onChange={(e) =>
            onFilterChange({
              city,
              minPrice: e.target.value ? Number(e.target.value) : undefined,
              maxPrice,
            })
          }
          className="w-full rounded-lg border border-zinc-300 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:border-zinc-700"
        />
      </div>

      <div className="w-36">
        <label className="block text-xs font-semibold uppercase text-zinc-500 mb-1">
          Max Rent (PHP)
        </label>
        <input
          type="number"
          placeholder="e.g. 35000"
          value={maxPrice || ""}
          onChange={(e) =>
            onFilterChange({
              city,
              minPrice,
              maxPrice: e.target.value ? Number(e.target.value) : undefined,
            })
          }
          className="w-full rounded-lg border border-zinc-300 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:border-zinc-700"
        />
      </div>

      <div className="self-end">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onFilterChange({ city: undefined, minPrice: undefined, maxPrice: undefined })}
        >
          Reset Filters
        </Button>
      </div>
    </div>
  );
}
