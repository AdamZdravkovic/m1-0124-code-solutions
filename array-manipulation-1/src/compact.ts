/* exported compact */
const compact = (array: unknown[]): unknown[] => {
  const compactedArr: unknown[] = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      compactedArr.push(array[i]);
    }
  }
  return compactedArr;
};
