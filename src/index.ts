export function add(input: string): number {
  const stringValue = input ? input : "0";
  const isCustomDelimiter = stringValue.substring(0, 2) == "//";
  const delimiter = isCustomDelimiter ? stringValue.charAt(2) : "\n";
  const cleanStringValue = isCustomDelimiter
    ? stringValue.split("\n")[1]
    : stringValue;
  const standardDelimiterString = cleanStringValue.replaceAll(delimiter, ",");
  const valueList = standardDelimiterString.split(",");
  const numberValueList = valueList.map(Number);
  const negativeValueList = numberValueList.filter((value) => value < 0);
  const hasNegative = negativeValueList.length > 0;
  if (hasNegative) {
    const negativeValueString = negativeValueList.join(",");
    throw "Negatives not allowed: " + negativeValueString;
  }
  const sumValue = sumListItems(numberValueList);
  return sumValue;
}
function sumListItems(numberValueList: number[]) {
  return numberValueList.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
}
