export function add(input: string): number {
  const stringValue = input ? input : "0";
  const valueList = stringValue.split(",");
  const numberValueList = valueList.map(Number);
  const sumValue =
    numberValueList[0] + (numberValueList[1] ? numberValueList[1] : 0);
  return sumValue;
}
