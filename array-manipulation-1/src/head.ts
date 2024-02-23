/* exported head */
const head = (array: unknown[]): unknown => {
  if (array.length === 0) {
    return undefined;
  }
  return array[0];
};
