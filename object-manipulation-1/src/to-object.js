"use strict";
/* exported toObject */
const toObject = (keyValuePair) => {
    const obj = {};
    obj[keyValuePair[0]] = keyValuePair[1];
    return obj;
};
