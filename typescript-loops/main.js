'use strict';
/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
// Creating function with no parameters: getNumbersToTen
const getNumbersToTen = () => {
  const numbers = [];
  let currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
};
// Testing and printing to console
console.log(`getNumbersToTen()`);
console.log(getNumbersToTen());
// Creating getEvenNumbersToTwenty
const getEvenNumbersToTwenty = () => {
  const evenNumbers = [];
  let currentNumber = 2;
  while (currentNumber >= 2 && currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
};
// Testing and printing to console
console.log(`getEvenNumbersToTwenty()`);
console.log(getEvenNumbersToTwenty());
// Creating repeatWord with two parameters: word and times
const repeatWord = (word, times) => {
  let count = 1;
  let repeated = '';
  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
};
// Testing and printing to console
console.log(`repeatWord('car', 11)`);
console.log(repeatWord('car', 11));
// Creating logEachCharacter with one parameter: string
const logEachCharacter = (string) => {
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
};
// Testing and printing to console
console.log(`logEachCharacter('')`);
console.log(logEachCharacter(''));
console.log(`logEachCharacter('Adam')`);
console.log(logEachCharacter('Adam'));
console.log(`logEachCharacter('mechanic')`);
console.log(logEachCharacter('mechanic'));
// Creating doubleAll with parameter numbers
const doubleAll = (numbers) => {
  const doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
};
// Testing and printing to console
console.log(`doubleAll([5, 8, 20])`);
console.log(doubleAll([5, 8, 20]));
// Creating getKeys with one parameter: object
const getKeys = (object) => {
  const keys = [];
  for (const key in object) {
    keys.push(key);
  }
  return keys;
};
// Testing and printing to console
console.log(`getKeys({title: 'Luther', episode: 2})`);
console.log(getKeys({ title: 'Luther', episode: 2 }));
// Creating getValues with one parameter object
const getValues = (object) => {
  const values = [];
  for (const key in object) {
    values.push(object[key]);
  }
  return values;
};
// Testing and printing to console
console.log(`getValues({name: 'Adrian', age: 35})`);
console.log(getValues({ name: 'Adrian', age: 35 }));
