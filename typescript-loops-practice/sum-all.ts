/* exported sumAll */
const sumAll = (number: number[]): number => {
  let newArray: number = 0;
  for (let i = 0; i < number.length; i++) {
    newArray += number[i];
  }
  return newArray;
};
