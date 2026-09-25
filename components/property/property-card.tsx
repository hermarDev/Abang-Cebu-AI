import Link from "next/link";
import { Property } from "@/types/property";
import { formatPrice } from "@/lib/utils/format-price";
import { Badge } from "@/components/ui/badge";
import { Bed, Bath, MapPin, ShieldCheck, Sparkles } from "lucide-react";

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const thumbnail = property.images[0] || "/placeholder-property.jpg";

  return (
    <div className="group overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-xs transition-all hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
      <Link href={`/properties/${property.id}`} className="relative block aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-800">
        <img
          src={thumbnail}
          alt={property.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {property.isVerified && (
            <Badge variant="verified" className="flex items-center gap-1 shadow-sm">
              <ShieldCheck className="h-3 w-3" />
              Verified
            </Badge>
          )}
          {property.aiSafetyScore && property.aiSafetyScore >= 80 && (
            <Badge variant="default" className="flex items-center gap-1 shadow-sm bg-emerald-600">
              <Sparkles className="h-3 w-3" />
              AI Verified Safe
            </Badge>
          )}
        </div>
        <div className="absolute bottom-3 right-3 rounded-md bg-black/75 px-2 py-1 text-xs font-semibold text-white backdrop-blur-xs">
          {property.propertyType.replace("_", " ").toUpperCase()}
        </div>
      </Link>

      <div className="p-4">
        <div className="flex items-baseline justify-between">
          <p className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
            {formatPrice(property.priceMonthly)}
            <span className="text-xs font-normal text-zinc-500"> / month</span>
          </p>
        </div>

        <Link href={`/properties/${property.id}`}>
          <h3 className="mt-1 line-clamp-1 text-base font-semibold text-zinc-900 group-hover:text-emerald-600 dark:text-zinc-100">
            {property.title}
          </h3>
        </Link>

        <p className="mt-1.5 flex items-center text-xs text-zinc-500 dark:text-zinc-400">
          <MapPin className="mr-1 h-3.5 w-3.5 shrink-0 text-zinc-400" />
          <span className="line-clamp-1">
            Brgy. {property.barangay}, {property.city}
          </span>
        </p>

        <div className="mt-4 flex items-center gap-4 border-t border-zinc-100 pt-3 text-xs text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
          <span className="flex items-center gap-1">
            <Bed className="h-4 w-4 text-zinc-400" />
            {property.bedrooms} {property.bedrooms === 1 ? "Bed" : "Beds"}
          </span>
          <span className="flex items-center gap-1">
            <Bath className="h-4 w-4 text-zinc-400" />
            {property.bathrooms} {property.bathrooms === 1 ? "Bath" : "Baths"}
          </span>
          {property.floorAreaSqM && (
            <span>{property.floorAreaSqM} m²</span>
          )}
        </div>
      </div>
    </div>
  );
}
