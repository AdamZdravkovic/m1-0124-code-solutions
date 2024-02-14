/* exported getIndexes */
const getIndexes = (array: any[]): number[] => {
  const myIndexes: number[] = [];
  for (let i = 0; i < array.length; i++) {
    myIndexes.push(i);
  }
  return myIndexes;
};
