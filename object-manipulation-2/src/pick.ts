/* exported pick */
const pick = (
  source: { [key: string]: unknown },
  keys: string[]
): { [key: string]: unknown } => {
  const newObj: { [key: string]: unknown } = {};
  for (const key of keys) {
    if (source[key] !== undefined) {
      newObj[key] = source[key];
    }
  }
  return newObj;
};
