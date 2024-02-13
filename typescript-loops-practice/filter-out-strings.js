'use strict';
/* exported filterOutStrings */
const filterOutStrings = (values) => {
  const newArr = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      newArr.push(values[i]);
    }
  }
  return newArr;
};
