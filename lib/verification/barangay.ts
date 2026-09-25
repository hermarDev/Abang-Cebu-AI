export const CEBU_CITIES = [
  "Cebu City",
  "Mandaue City",
  "Lapu-Lapu City",
  "Talisay City",
  "Consolacion",
  "Liloan",
  "Minglanilla",
  "Cordova",
] as const;

export const POPULAR_CEBU_BARANGAYS: Record<string, string[]> = {
  "Cebu City": [
    "Apas (IT Park)",
    "Lahug",
    "Banilad",
    "Guadalupe",
    "Kamputhaw (Ayala)",
    "Mabolo",
    "Kasambagan",
    "Talamban",
    "Punta Princesa",
    "Tisa",
    "Labangon",
    "Basak San Nicolas",
    "Sambag I",
    "Sambag II",
  ],
  "Mandaue City": [
    "Subangdaku",
    "Tipolo",
    "Banilad",
    "Bakilid",
    "Centro",
    "Cabancalan",
    "Alang-Alang",
  ],
  "Lapu-Lapu City": [
    "Pajo",
    "Basak",
    "Maribago",
    "Mactan",
    "Pusok",
    "Gun-ob",
  ],
  "Talisay City": [
    "Bulacao",
    "Tabunok",
    "San Roque",
    "Dumlog",
    "Poblacion",
  ],
};

export function isValidCebuLocation(city: string, barangay?: string): boolean {
  if (!CEBU_CITIES.includes(city as (typeof CEBU_CITIES)[number])) {
    return false;
  }
  if (!barangay) return true;
  const barangays = POPULAR_CEBU_BARANGAYS[city];
  return !barangays || barangays.includes(barangay);
}
