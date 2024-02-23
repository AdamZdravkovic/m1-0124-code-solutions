'use strict';
/* exported defaults */
const defaults = (target, source) => {
  for (const key in source) {
    if (!(key in target)) {
      target[key] = source[key];
    }
  }
};
