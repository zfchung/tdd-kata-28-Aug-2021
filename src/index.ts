export function add(input: string): number {
  const stringValue = input ? input : "0";
  const valueList = stringValue.split(",");
  const numberValueList = valueList.map(Number);
  return numberValueList[0] + (numberValueList[1] ? numberValueList[1] : 0);
}
