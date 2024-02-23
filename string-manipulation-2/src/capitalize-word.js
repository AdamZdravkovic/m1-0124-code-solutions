'use strict';
/* exported capitalizeWord */
const capitalizeWord = (word) => {
  const allLow = word.toLowerCase();
  if (allLow === 'javascript') {
    return 'JavaScript';
  }
  return word[0].toUpperCase() + allLow.slice(1);
};
