// Function that converts minutes to seconds

const convertMinutesToSeconds = (minutes: number): number => minutes * 60;

// Printing to console to check if function works properly

console.log(`convertMinutesToSeconds: ${convertMinutesToSeconds(5)}`);
console.log(`convertMinutesToSeconds: ${convertMinutesToSeconds(10)}`);

// Function that concatenates string containing the value in the name parameter

const greet = (name: string): string => `Hey ${name}!`;

// Printing to console to check if function works properly

console.log(`greet: ${greet('Beavis')}`);
console.log(`greet: ${greet('SpongeBob')}`);

// Function that represents the total area of the rectangle based on the width and height

const getArea = (width: number, height: number): number => width * height;

// Printing to console to check if function works properly

console.log(`getArea: ${getArea(17, 42)}`);
console.log(`getArea: ${getArea(22, 38)}`);

// Interface that will determine my object to have only 2 properties with string type that I will use inside of main function

interface Person {
  firstName: string;
  lastName: string;
}

// Function that is a TypeScript object with firstName and lastName properties

const getFirstName = (person: Person): string => person.firstName;

// Printing to console to check if function works properly

console.log(
  `getFirstName: ${getFirstName({
    firstName: 'Lelouche',
    lastName: 'Lamperouge',
  })}`
);

console.log(
  `getFirstName: ${getFirstName({
    firstName: 'John',
    lastName: 'Henry',
  })}`
);

// Function that returns the value stored in the last index of the array parameter

const getLastElement = (array: any[]): any => array[array.length - 1];

// Printing to console to check if function works properly

console.log(
  `getLastElement: ${getLastElement([
    'propane',
    'and',
    'propane',
    'accessories',
  ])}`
);

console.log(`getLastElement: ${getLastElement([true, true, false, true])}`);

// Function that returns the value returned from calling otherFunction with the params parameter

const callOtherFunction = (callBackFunction: any, params: unknown): unknown =>
  callBackFunction(params);

// Printing to console to check if function works properly

console.log(
  `callOtherFunction: ${callOtherFunction(convertMinutesToSeconds, 10)}`
);

console.log(
  `callOtherFunction: ${callOtherFunction(getLastElement, [
    'hello',
    'Goodbye',
    'Aloha',
  ])}`
);
