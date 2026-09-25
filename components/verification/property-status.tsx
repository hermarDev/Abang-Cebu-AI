import { CheckCircle2, AlertCircle, Clock } from "lucide-react";

interface PropertyStatusProps {
  status: "verified" | "pending" | "unverified";
}

export function PropertyStatus({ status }: PropertyStatusProps) {
  if (status === "verified") {
    return (
      <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
        <CheckCircle2 className="h-4 w-4" />
        <span>Verified Property</span>
      </div>
    );
  }

  if (status === "pending") {
    return (
      <div className="flex items-center gap-2 text-xs font-semibold text-amber-600 dark:text-amber-400">
        <Clock className="h-4 w-4" />
        <span>Pending Review</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 text-xs font-semibold text-zinc-500">
      <AlertCircle className="h-4 w-4" />
      <span>Standard Listing</span>
    </div>
  );
}
