export const REQUIRED_PROPERTY_DOCUMENTS = [
  "Transfer Certificate of Title (TCT) or Condominium Certificate of Title (CCT)",
  "Barangay Clearance for Rental Operation",
  "Latest Real Property Tax (Amilyar) Receipt",
  "Authority to Lease (if representative or broker)",
] as const;

export function calculatePropertyVerificationScore(docs: {
  hasTitle: boolean;
  hasBarangayClearance: boolean;
  hasTaxReceipt: boolean;
}): number {
  let score = 0;
  if (docs.hasTitle) score += 50;
  if (docs.hasBarangayClearance) score += 30;
  if (docs.hasTaxReceipt) score += 20;
  return score;
}
