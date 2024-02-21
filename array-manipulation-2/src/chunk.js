'use strict';
/* exported chunk */
const chunk = (array, size) => {
  if (size <= 0) {
    return [];
  }
  const chunkedArray = [];
  let chunk = [];
  for (let i = 0; i < array.length; i++) {
    chunk.push(array[i]);
    if (chunk.length === size || i === array.length - 1) {
      chunkedArray.push(chunk);
      chunk = [];
    }
  }
  return chunkedArray;
};
