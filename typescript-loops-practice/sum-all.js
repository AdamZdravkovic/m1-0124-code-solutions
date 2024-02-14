'use strict';
/* exported sumAll */
const sumAll = (number) => {
  let newArray = 0;
  for (let i = 0; i < number.length; i++) {
    newArray += number[i];
  }
  return newArray;
};
