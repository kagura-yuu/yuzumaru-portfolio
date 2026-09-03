export function isValidGaId(id: string | undefined): id is string {
  if (!id) return false;
  if (id.includes("XXXX")) return false;
  return /^G-[A-Z0-9]+$/.test(id);
}
