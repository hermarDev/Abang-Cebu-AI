export const MAPBOX_ACCESS_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || "";

// Default center on Cebu City Fuente Osmeña / IT Park coordinate
export const DEFAULT_CEBU_CENTER = {
  lat: 10.3157,
  lng: 123.8854,
  zoom: 12,
};

export async function geocodeCebuAddress(query: string): Promise<{ lat: number; lng: number } | null> {
  if (!MAPBOX_ACCESS_TOKEN) {
    return { lat: DEFAULT_CEBU_CENTER.lat, lng: DEFAULT_CEBU_CENTER.lng };
  }

  try {
    const encoded = encodeURIComponent(`${query}, Cebu, Philippines`);
    const res = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${encoded}.json?access_token=${MAPBOX_ACCESS_TOKEN}&country=ph&bbox=123.7,10.1,124.1,10.6`
    );
    const data = await res.json();
    if (data.features && data.features.length > 0) {
      const [lng, lat] = data.features[0].center;
      return { lat, lng };
    }
  } catch (error) {
    console.error("Mapbox geocoding error:", error);
  }
  return null;
}
