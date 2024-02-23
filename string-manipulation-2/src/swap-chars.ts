/* exported swapChars */
const swapChars = (
  firstIndex: number,
  secondIndex: number,
  string: string
): string => {
  const arr: string[] = string.split('');
  const tem: string = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = tem;
  return arr.join('');
};
