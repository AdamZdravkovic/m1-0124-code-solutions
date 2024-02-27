'use strict';
/* exported drop */
const drop = (array, count) => {
  const newArr = [];
  for (let i = count; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
};
