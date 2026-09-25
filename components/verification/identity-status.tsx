import { ShieldCheck, ShieldAlert, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface IdentityStatusProps {
  status: "verified" | "pending" | "unverified";
  idType?: string;
}

export function IdentityStatus({ status, idType }: IdentityStatusProps) {
  if (status === "verified") {
    return (
      <div className="flex items-center gap-3 rounded-lg border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-900/50 dark:bg-emerald-950/20">
        <ShieldCheck className="h-6 w-6 text-emerald-600" />
        <div>
          <h4 className="text-sm font-semibold text-emerald-900 dark:text-emerald-300">Identity Verified</h4>
          <p className="text-xs text-emerald-700 dark:text-emerald-400">
            {idType ? `Validated via Philippine ${idType}` : "Government ID validated"}
          </p>
        </div>
      </div>
    );
  }

  if (status === "pending") {
    return (
      <div className="flex items-center gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900/50 dark:bg-amber-950/20">
        <Clock className="h-6 w-6 text-amber-600" />
        <div>
          <h4 className="text-sm font-semibold text-amber-900 dark:text-amber-300">Review in Progress</h4>
          <p className="text-xs text-amber-700 dark:text-amber-400">
            Your government ID is currently under audit by the Abang Cebu team.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-center gap-3">
        <ShieldAlert className="h-6 w-6 text-zinc-400" />
        <div>
          <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Identity Not Verified</h4>
          <p className="text-xs text-zinc-500">Submit a valid Philippine ID to increase trust and unlock posting.</p>
        </div>
      </div>
      <Badge variant="outline">Unverified</Badge>
    </div>
  );
}
