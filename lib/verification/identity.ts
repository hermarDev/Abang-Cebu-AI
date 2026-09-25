export const ACCEPTED_PHILIPPINE_IDS = [
  "Philippine National ID (PhilID)",
  "Passport",
  "Driver's License",
  "UMID",
  "SSS ID",
  "PRC ID",
  "Postal ID",
  "Voter's ID",
] as const;

export function validatePhilippineIdType(idType: string): boolean {
  return ACCEPTED_PHILIPPINE_IDS.includes(idType as (typeof ACCEPTED_PHILIPPINE_IDS)[number]);
}
