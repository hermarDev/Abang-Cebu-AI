import { Property, PropertyFilterParams } from "@/types/property";

export function filterPropertiesLocally(
  properties: Property[],
  filters: PropertyFilterParams
): Property[] {
  return properties.filter((p) => {
    if (filters.city && p.city.toLowerCase() !== filters.city.toLowerCase()) {
      return false;
    }
    if (filters.barangay && p.barangay.toLowerCase() !== filters.barangay.toLowerCase()) {
      return false;
    }
    if (filters.minPrice && p.priceMonthly < filters.minPrice) {
      return false;
    }
    if (filters.maxPrice && p.priceMonthly > filters.maxPrice) {
      return false;
    }
    if (filters.bedrooms && p.bedrooms < filters.bedrooms) {
      return false;
    }
    if (filters.propertyType && p.propertyType !== filters.propertyType) {
      return false;
    }
    if (filters.verifiedOnly && !p.isVerified) {
      return false;
    }
    if (filters.query) {
      const q = filters.query.toLowerCase();
      const matchTitle = p.title.toLowerCase().includes(q);
      const matchDesc = p.description.toLowerCase().includes(q);
      const matchBrgy = p.barangay.toLowerCase().includes(q);
      if (!matchTitle && !matchDesc && !matchBrgy) return false;
    }
    return true;
  });
}
