import { VerificationProgress as ProgressType } from "@/types/verification";
import { CheckCircle2, Circle } from "lucide-react";

interface VerificationProgressProps {
  progress: ProgressType;
}

export function VerificationProgress({ progress }: VerificationProgressProps) {
  const steps = [
    { label: "Government ID", done: progress.identityVerified },
    { label: "Barangay Clearance", done: progress.barangayVerified },
    { label: "Property Ownership Documents", done: progress.propertyDocumentVerified },
  ];

  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Verification Progress</h3>
        <span className="text-sm font-bold text-emerald-600">{progress.overallScore}%</span>
      </div>

      <div className="mt-4 space-y-3">
        {steps.map((step, idx) => (
          <div key={idx} className="flex items-center justify-between text-sm">
            <span className="text-zinc-600 dark:text-zinc-300">{step.label}</span>
            {step.done ? (
              <span className="flex items-center gap-1 text-emerald-600">
                <CheckCircle2 className="h-4 w-4" /> Verified
              </span>
            ) : (
              <span className="flex items-center gap-1 text-zinc-400">
                <Circle className="h-4 w-4" /> Pending
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
