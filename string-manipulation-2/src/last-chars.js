'use strict';
/* exported lastChars */
const lastChars = (length, string) => {
  if (string === '') {
    return '';
  } else if (length >= string.length) {
    return string;
  }
  return string.slice(-length);
};
