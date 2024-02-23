/* exported setValue */
const setValue = (object: {[key: string]: any }, key: string, value: unknown): undefined => {
   object[key] = value;
};
