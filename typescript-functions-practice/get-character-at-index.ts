/* exported getCharacterAtIndex */
const getCharacterAtIndex = (string: string, index: any): string => {
  if (index >= 0 && index < string.length) {
    return string[index];
  } else {
    return `Index needs to be greater than or equal to 0`;
  }
};
