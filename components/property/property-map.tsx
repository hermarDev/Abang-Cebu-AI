"use client";

import { MapPin } from "lucide-react";

interface PropertyMapProps {
  lat: number;
  lng: number;
  title: string;
  barangay: string;
  city: string;
}

export function PropertyMap({ lat, lng, title, barangay, city }: PropertyMapProps) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100 p-6 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
          <MapPin className="h-5 w-5" />
        </div>
        <div>
          <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">{barangay}, {city}</h4>
          <p className="text-xs text-zinc-500">Coordinates: {lat.toFixed(4)}, {lng.toFixed(4)}</p>
        </div>
      </div>
      <div className="mt-4 flex h-48 w-full items-center justify-center rounded-lg bg-emerald-50/50 text-xs text-zinc-500 dark:bg-zinc-800/40">
        Interactive Map view centered near {barangay} (Mapbox / OpenStreetMap integration ready)
      </div>
    </div>
  );
}
