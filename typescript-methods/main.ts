// 1. Create new array with four strings

const heroes: string[] = ['Spiderman', 'Punisher', 'Hulk', 'Batman'];

// Create random number

let randomNumber: number = Math.random();

// Multiply with lenght of heroes array

randomNumber = randomNumber * heroes.length;

// Rounds down the numbers

const randomIndex: number = Math.floor(randomNumber);

// Print to console

console.log(`Random index: ${randomIndex}`);

// Assign random index to heroes

const randomHero: string = heroes[randomIndex];

// Print to console

console.log(`Random superhero: ${randomHero}`);

// 2. New interface with three objects

interface Library {
  title: string;
  author: string;
}

// Creating new library array of objects

const library: Library[] = [
  {
    title: 'title1',
    author: 'author1',
  },
  {
    title: 'title2',
    author: 'author2',
  },
  {
    title: 'title3',
    author: 'author3',
  },
];

// Calling pop method

const lastBook = library.pop();

// Printing to console and checking if return value is undefined

if (lastBook) {
  console.log('lastBook: ', lastBook);
} else {
  console.log('Undefined');
}

// Calling shift method

const firstBook = library.shift();

// Printing to console and checking if return value is undefined

if (firstBook) {
  console.log('firstBook: ', firstBook);
} else {
  console.log('Undefined');
}

// Two new objects

const js: Library = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css: Library = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

// Calling push method

library.push(js);

// Calling unshift method

library.unshift(css);

// Calling splice method

library.splice(1, 1);

// Printing to console

console.log('Library: ', library);

// 3. Creating new string

const fullName: string = 'Adam Zdravkovic';

// Calling split method

const firstAndLastName: string[] = fullName.split(' ');

// Printing to console

console.log('firstAndLastName: ', firstAndLastName);

// Accessing the first element

const firstName: string = firstAndLastName[0];

// Calling toUpperCase method

const sayMyName = firstName.toUpperCase();

// Printing to console

console.log('SayMyName: ', sayMyName);

// 4. Create an object

const employee = {
  name: 'Michael',
  age: 55,
  position: 'Manager',
};

// Calling keys method

const employeeKeys: string[] = Object.keys(employee);

// Printing to console

console.log('EmployeeKeys', employeeKeys);

// Calling values method

const employeeValues: (string | number)[] = Object.values(employee);

// Printing to console

console.log('employeeValues', employeeValues);

// Calling entries method

const employeePairs: [string, string | number][] = Object.entries(employee);

// Printing to console

console.log('employeePairs', employeePairs);
