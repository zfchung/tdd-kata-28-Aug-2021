export function add(input: string): number {
  const stringValue = input ? input : "0";
  const standardDelimiterString = stringValue.replaceAll("\n", ",");
  const valueList = standardDelimiterString.split(",");
  const numberValueList = valueList.map(Number);
  const sumValue = sumListItems(numberValueList);
  return sumValue;
}
function sumListItems(numberValueList: number[]) {
  return numberValueList.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
}
