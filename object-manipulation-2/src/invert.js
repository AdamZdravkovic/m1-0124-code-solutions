'use strict';
/* exported invert */
const invert = (source) => {
  const inverted = {};
  for (const key in source) {
    const originalValue = source[key];
    inverted[originalValue] = key;
  }
  return inverted;
};
