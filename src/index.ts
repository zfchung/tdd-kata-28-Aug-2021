export function add(input: string): number {
  const stringValue = input ? input : "0";
  const numberValue = parseInt(stringValue);
  return numberValue;
}
