export type VerificationType = "government_id" | "barangay_clearance" | "property_title" | "utility_bill";

export type VerificationStatus = "pending" | "approved" | "rejected";

export interface VerificationDocument {
  id: string;
  userId: string;
  propertyId?: string | null;
  type: VerificationType;
  documentUrl: string;
  status: VerificationStatus;
  adminNotes?: string | null;
  reviewedBy?: string | null;
  reviewedAt?: string | null;
  createdAt: string;
}

export interface VerificationProgress {
  identityVerified: boolean;
  barangayVerified: boolean;
  propertyDocumentVerified: boolean;
  overallScore: number;
}
