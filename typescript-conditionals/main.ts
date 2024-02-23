/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */

// Return Value: a boolean indicating whether or not number is less than five

const isUnderFive = (number: number): boolean => {
  if (number > 5) {
    return false;
  } else {
    return true;
  }
};

// Return Value: a boolean indicating whether or not number is evenly divisible by 2

const isEven = (number: number): boolean => {
  if (number % 2 > 0) {
    return false;
  } else {
    return true;
  }
};

// Return Value: A boolean indicating whether or not the first character in string is a capital 'J'

const startsWithJ = (string: string): boolean => {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
};

// Return Value: a boolean indicating whether or not the person is of legal drinking age (at least 21)

interface Person {
  name: string;
  age: number;
}

const isOldEnoughToDrink = (person: Person): boolean => {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
};

// Return value: an object with name (a string) and age (a number) properties

interface Person {
  name: string;
  age: number;
}

const isOldEnoughToDrive = (person: Person): boolean => {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
};

// Return value: false

const isOldEnoughToDrinkAndDrive = (): boolean => {
  return false;
};

// Return value: a  string describing the pH level of a substance in plain English. Valid pH levels go from 0 to 14

const categorizeAcidity = (pH: number): string => {
  if (pH === 7) {
    return 'neutral';
  } else if (pH >= 0 && pH < 7) {
    return 'acid';
  } else if (pH > 7 && pH <= 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
};

// Return value: depending on the name of the character, may return a different catch-phrase. "yakko" and "wakko" both say "We're the warner brothers!", but "dot" says "I'm cute~"

const introduceWarnerBro = (name: string): string => {
  switch (name) {
    case 'yakko':
      return "We're the warner brothers!";
      break;
    case 'wakko':
      return "We're the warner brothers!";
      break;
    case 'dot':
      return "I'm cute~";
      break;
    default:
      return 'Goodnight everybody!';
      break;
  }
};

// Return value: a string representing a movie from the specified genre. Here are the genres: action, comedy, horror, drama, musical, and ci-fi

const recommendMovie = (genre: string): string => {
  switch (genre) {
    case 'action':
      return 'Die Hard';
      break;
    case 'comedy':
      return 'The Big Lebowski';
      break;
    case 'horror':
      return 'Saw';
      break;
    case 'drama':
      return 'Whiplash';
      break;
    case 'musical':
      return 'Mamma mia!';
      break;
    case 'sci-fi':
      return 'Alien';
      break;
    case 'random':
      return 'Saw';
      break;
    default:
      return 'Invalid genre';
  }
};
