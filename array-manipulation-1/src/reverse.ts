/* exported reverse */
const reverse = (reverse: unknown[]): unknown[] => {
  const newArr: unknown[] = [];
  for (let i = reverse.length - 1; i >= 0; i--) {
    newArr.push(reverse[i]);
  }
  return newArr;
};
