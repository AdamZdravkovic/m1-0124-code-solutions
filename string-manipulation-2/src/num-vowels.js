'use strict';
/* exported numVowels */
const numVowels = (string) => {
  const arr = [];
  const lowString = string.toLowerCase();
  for (let i = 0; i < lowString.length; i++) {
    if (
      lowString[i] === 'a' ||
      lowString[i] === 'o' ||
      lowString[i] === 'e' ||
      lowString[i] === 'u' ||
      lowString[i] === 'i'
    ) {
      arr.push(string[i]);
    }
  }
  return arr.length;
};
