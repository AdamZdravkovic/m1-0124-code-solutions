'use strict';
/* exported numVowels */
const numVowels = (string) => {
  const arr = [];
  const lowString = string.toLowerCase();
  for (let i = 0; i < lowString.length; i++) {
    if (
      lowString[i] === 'a' ||
      lowString[i] === 'o' ||
      lowString[i] === 'i' ||
      lowString[i] === 'u' ||
      lowString[i] === 'e'
    ) {
      arr.push(string[i]);
    }
  }
  return arr.length;
};
