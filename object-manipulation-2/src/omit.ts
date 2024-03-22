/* exported omit */
const omit = (
  source: { [key: string]: unknown },
  keys: string[]
): { [key: string]: unknown } => {
  const newObj: { [key: string]: unknown } = {};
  for (const key in source) {
    if (!keys.includes(key)) {
      newObj[key] = source[key];
    }
  }
  return newObj;
};
