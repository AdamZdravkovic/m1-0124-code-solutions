/* exported capitalizeWord */
const capitalizeWord = (word: string): string => {
  const allLow: string = word.toLowerCase();
  if (allLow === 'javascript') {
    return 'JavaScript';
  }
  return word[0].toUpperCase() + allLow.slice(1);
};
