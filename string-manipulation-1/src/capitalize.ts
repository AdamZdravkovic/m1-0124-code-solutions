/* exported capitalize */

const capitalize = (words: string): string => {
  return words[0].toUpperCase() + words.slice(1).toLowerCase();
};
