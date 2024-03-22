'use strict';
/* exported omit */
const omit = (source, keys) => {
  const newObj = {};
  for (let key in source) {
    if (!keys.includes(key)) {
      newObj[key] = source[key];
    }
  }
  return newObj;
};
