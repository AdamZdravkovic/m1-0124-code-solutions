"use strict";
/* exported getCharacterAtIndex */
const getCharacterAtIndex = (string, index) => {
    if (index >= 0 && index < string.length) {
        return string[index];
    }
    else {
        return `Index needs to be greater than or equal to 0`;
    }
};
