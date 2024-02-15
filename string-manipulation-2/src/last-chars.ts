/* exported lastChars */
const lastChars = (length: number, string: string): string => {
  if (string === '') {
    return '';
  } else if (length >= string.length) {
    return string;
  }
  return string.slice(-length);
};
