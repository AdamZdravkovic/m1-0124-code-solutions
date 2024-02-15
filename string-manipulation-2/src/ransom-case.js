'use strict';
/* exported ransomCase */
const ransomCase = (string) => {
  let myString = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2) {
      const low = string[i].toUpperCase();
      myString += low;
    } else {
      const upp = string[i].toLowerCase();
      myString += upp;
    }
  }
  return myString;
};
