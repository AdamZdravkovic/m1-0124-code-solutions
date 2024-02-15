'use strict';
/* exported swapChars */
const swapChars = (firstIndex, secondIndex, string) => {
  const arr = string.split('');
  const tem = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = tem;
  return arr.join('');
};
