import { z } from "zod";

export const verificationSchema = z.object({
  type: z.enum(["government_id", "barangay_clearance", "property_title", "utility_bill"]),
  documentUrl: z.string().url("Valid document URL is required"),
  propertyId: z.string().uuid().optional(),
  idNumber: z.string().optional(),
  issuedBarangay: z.string().optional(),
});

export type VerificationInput = z.infer<typeof verificationSchema>;
