/* exported getWords */
const getWords = (string: string): string[] => {
  if (string !== '') {
    return string.split(' ');
  }
  return [];
};
