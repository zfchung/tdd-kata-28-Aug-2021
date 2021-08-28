export function add(input: string): number {
  const stringValue = input ? input : "0";
  const valueList = stringValue.split(",");
  const numberValueList = valueList.map(Number);
  const sumValue = numberValueList.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  return sumValue;
}
