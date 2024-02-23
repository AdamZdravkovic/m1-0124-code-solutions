/* exported invert */
const invert = (source: { [key: string]: any }): { [key: string]: unknown } => {
  const inverted: { [key: string]: unknown } = {};

  for (const key in source) {
    const originalValue = source[key];
    inverted[originalValue] = key;
  }

  return inverted;
};
