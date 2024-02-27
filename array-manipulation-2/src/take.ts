/* exported take */
function take(array: unknown[], count: number): unknown[] {
  const result: unknown[] = [];

  for (let i = 0; i < count && i < array.length; i++) {
    result.push(array[i]);
  }

  return result;
}
