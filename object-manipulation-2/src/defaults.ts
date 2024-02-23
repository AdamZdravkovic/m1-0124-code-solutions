/* exported defaults */
const defaults = (
  target: { [key: string]: any },
  source: { [key: string]: any }
): void => {
  for (const key in source) {
    if (!(key in target)) {
      target[key] = source[key];
    }
  }
};
