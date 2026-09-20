export function readFailParam(
  value: string | string[] | undefined,
): boolean {
  if (Array.isArray(value)) {
    return value.includes("1");
  }
  return value === "1";
}
