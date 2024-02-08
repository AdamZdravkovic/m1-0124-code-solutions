/* exported getElementAtIndex */
const getElementAtIndex = (array: any[], index: number): any => {
  if (index < 0 || index >= array.length) {
    return `Error. Number needs to be bigger than 0 and smaller than amount of items in array`;
  };
  return array[index];
};
