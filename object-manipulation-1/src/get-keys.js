"use strict";
/* exported getKeys */
const getKeys = (object) => {
    const keys = [];
    for (const key in object) {
        keys.push(key);
    }
    ;
    return keys;
};
