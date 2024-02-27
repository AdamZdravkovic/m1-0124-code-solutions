/* exported drop */
const drop = (array: unknown[], count: number): unknown[] => {
  const newArr: unknown[] = [];
  for (let i = count; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
};
