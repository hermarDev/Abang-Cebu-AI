import { Check } from "lucide-react";

interface PropertyAmenitiesProps {
  amenities: string[];
}

export function PropertyAmenities({ amenities }: PropertyAmenitiesProps) {
  if (!amenities || amenities.length === 0) {
    return <p className="text-sm text-zinc-500">No specific amenities listed.</p>;
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {amenities.map((item, idx) => (
        <div key={idx} className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300">
          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
            <Check className="h-3.5 w-3.5" />
          </div>
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}
