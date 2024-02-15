/* exported firstChars */
const firstChars = (length: number, string: string): string => {
  if (string === '') {
    return '';
  } else if (length > string.length) {
    length = string.length;
  }
  return string.slice(0, length);
};
