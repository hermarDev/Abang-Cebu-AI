import { Badge } from "@/components/ui/badge";
import { ShieldCheck } from "lucide-react";

export function VerificationBadge({ verified }: { verified: boolean }) {
  if (!verified) return null;

  return (
    <Badge variant="verified" className="inline-flex items-center gap-1">
      <ShieldCheck className="h-3 w-3" />
      <span>Verified</span>
    </Badge>
  );
}
