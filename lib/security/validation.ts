export function sanitizeString(input: string): string {
  return input
    .replace(/[<>]/g, "") // basic tags strip
    .trim();
}

export function isValidPhilippinePhone(phone: string): boolean {
  return /^(\+63|0)9\d{9}$/.test(phone);
}
