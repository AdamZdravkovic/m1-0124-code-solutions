'use strict';
/* exported getWords */
const getWords = (string) => {
  if (string !== '') {
    return string.split(' ');
  }
  return [];
};
