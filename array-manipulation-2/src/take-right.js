'use strict';
/* exported takeRight */
const takeRight = (array, count) => {
  if (count >= array.length) {
    return array.slice();
  }
  const newArr = [];
  for (let i = array.length - count; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
};
