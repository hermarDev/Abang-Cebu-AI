import { z } from "zod";

export const propertySchema = z.object({
  title: z
    .string()
    .min(5, "Title must be at least 5 characters")
    .max(120, "Title cannot exceed 120 characters"),
  description: z
    .string()
    .min(20, "Description must be at least 20 characters")
    .max(2000, "Description cannot exceed 2000 characters"),
  propertyType: z.enum([
    "apartment",
    "condominium",
    "boarding_house",
    "townhouse",
    "single_family",
    "commercial",
  ]),
  priceMonthly: z.coerce.number().positive("Monthly rent must be greater than 0"),
  depositMonths: z.coerce.number().min(0).default(1),
  advanceMonths: z.coerce.number().min(0).default(1),
  bedrooms: z.coerce.number().min(0, "Bedrooms must be 0 or more"),
  bathrooms: z.coerce.number().min(1, "Must have at least 1 bathroom"),
  floorAreaSqM: z.coerce.number().positive().optional().nullable(),
  address: z.string().min(5, "Address is required"),
  barangay: z.string().min(2, "Barangay is required"),
  city: z.string().min(2, "City is required"),
  province: z.string().default("Cebu"),
  lat: z.coerce.number().min(-90).max(90).default(10.3157),
  lng: z.coerce.number().min(-180).max(180).default(123.8854),
  amenities: z.array(z.string()).default([]),
  rules: z.array(z.string()).default([]),
  images: z.array(z.string()).default([]),
});

export type PropertyInput = z.infer<typeof propertySchema>;
