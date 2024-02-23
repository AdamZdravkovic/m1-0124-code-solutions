/* exported reverseWord */
const reverseWord = (word: string): string => {
  let newArr: string = '';
  for (let i = word.length - 1; i >= 0; i--) {
    newArr += word[i];
  }
  return newArr;
};
