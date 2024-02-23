"use strict";
/* exported getValues */ { }
const getValues = (object) => {
    const values = [];
    for (const key in object) {
        if (key) {
            values.push(object[key]);
        }
        ;
    }
    ;
    return values;
};
