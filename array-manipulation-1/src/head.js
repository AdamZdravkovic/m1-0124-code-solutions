'use strict';
/* exported head */
const head = (array) => {
  if (array.length === 0) {
    return undefined;
  }
  return array[0];
};
