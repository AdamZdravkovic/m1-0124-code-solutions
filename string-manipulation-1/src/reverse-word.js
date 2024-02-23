'use strict';
/* exported reverseWord */
const reverseWord = (word) => {
  let newArr = '';
  for (let i = word.length - 1; i >= 0; i--) {
    newArr += word[i];
  }
  return newArr;
};
