
// Type exports for consumers
// Add specific types as needed
/**
 * formatSSN
 * @param ssn
 */
export function formatSSN(ssn: string): string {
  const cleaned = ssn.replace(/[^0-9]/g, "");
  if (cleaned.length !== 10) throw new Error("SSN must be 10 digits");
  return `${cleaned.slice(0, 2)}-${cleaned.slice(2, 7)}-${cleaned.slice(7)}`;
}

/**
 * validateSSN
 * @param ssn
 */
export function validateSSN(ssn: string): boolean {
  const cleaned = ssn.replace(/[^0-9]/g, "");
  return /^\d{10}$/.test(cleaned);
}

/**
 * generateRandomSSN
 */
export function generateRandomSSN(): string {
  const ssn = Math.floor(1000000000 + Math.random() * 9000000000).toString();
  return formatSSN(ssn);
}
