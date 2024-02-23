/* exported numVowels */
const numVowels = (string: string): number => {
  const arr: string[] = [];
  const lowString: string = string.toLowerCase();
  for (let i = 0; i < lowString.length; i++) {
    if (
      lowString[i] === 'a' ||
      lowString[i] === 'o' ||
      lowString[i] === 'e' ||
      lowString[i] === 'u' ||
      lowString[i] === 'i'
    ) {
      arr.push(string[i]);
    }
  }
  return arr.length;
};
