'use strict';
/* exported compact */
const compact = (array) => {
  const compactedArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      compactedArr.push(array[i]);
    }
  }
  return compactedArr;
};
