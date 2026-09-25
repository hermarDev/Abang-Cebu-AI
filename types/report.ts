export type ReportReason =
  | "scam_fraud"
  | "misleading_info"
  | "duplicate_listing"
  | "unresponsive_landlord"
  | "harassment"
  | "other";

export type ReportStatus = "open" | "investigating" | "resolved" | "dismissed";

export interface Report {
  id: string;
  reporterId: string;
  targetType: "property" | "user";
  targetId: string;
  reason: ReportReason;
  description: string;
  evidenceUrls?: string[];
  status: ReportStatus;
  resolutionNotes?: string | null;
  createdAt: string;
  resolvedAt?: string | null;
}
