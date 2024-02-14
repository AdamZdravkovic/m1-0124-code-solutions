'use strict';
/* exported reverse */
const reverse = (reverse) => {
  const newArr = [];
  for (let i = reverse.length - 1; i >= 0; i--) {
    newArr.push(reverse[i]);
  }
  return newArr;
};
