import { Badge } from "@/components/ui/badge";
import { ShieldCheck, FileCheck, Award } from "lucide-react";

interface VerificationBadgesProps {
  isVerified: boolean;
  hasBarangayClearance?: boolean;
  aiSafetyScore?: number | null;
}

export function VerificationBadges({
  isVerified,
  hasBarangayClearance,
  aiSafetyScore,
}: VerificationBadgesProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {isVerified && (
        <Badge variant="verified" className="flex items-center gap-1.5 py-1 px-3">
          <ShieldCheck className="h-4 w-4" />
          Landlord ID Verified
        </Badge>
      )}

      {hasBarangayClearance && (
        <Badge variant="default" className="flex items-center gap-1.5 py-1 px-3 bg-teal-600">
          <FileCheck className="h-4 w-4" />
          Barangay Cleared
        </Badge>
      )}

      {aiSafetyScore && aiSafetyScore >= 80 && (
        <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-3 border border-emerald-300">
          <Award className="h-4 w-4 text-emerald-600" />
          AI Trust Score: {aiSafetyScore}/100
        </Badge>
      )}
    </div>
  );
}
