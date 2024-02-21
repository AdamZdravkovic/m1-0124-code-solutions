/* exported dropRight */
const dropRight = (array: any[], count: number): any[] => {
  if (count >= array.length) {
    return [];
  }
  const newArr: any[] = [];
  for (let i = 0; i < array.length - count; i++) {
    newArr.push(array[i]);
  }
  return newArr;
};
