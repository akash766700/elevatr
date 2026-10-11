export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isNonEmptyString(value: string): boolean {
  return typeof value === "string" && value.trim().length > 0;
}
