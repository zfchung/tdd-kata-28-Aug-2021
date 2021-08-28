export function add(input: string): number {
  const stringValue = input ? input : "0";
  const numberValue = stringValue.split(",").map(Number);
  return numberValue[0] + (numberValue[1] ? numberValue[1] : 0);
}
