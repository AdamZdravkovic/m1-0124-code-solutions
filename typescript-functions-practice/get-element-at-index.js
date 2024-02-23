"use strict";
/* exported getElementAtIndex */
const getElementAtIndex = (array, index) => {
    if (index < 0 || index >= array.length) {
        return `Error. Number needs to be bigger than 0 and smaller than amount of items in array`;
    }
    ;
    return array[index];
};
