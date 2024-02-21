/* exported takeRight */
const takeRight = (array: any[], count: number): any[] => {
  if (count >= array.length) {
    return array.slice();
  }
  const newArr: any[] = [];
  for (let i = array.length - count; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
};
