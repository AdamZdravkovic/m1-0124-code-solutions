/* exported getLastNameOfPerson */
interface Person {
  firstName: string,
  lastName: string,
};


const getLastNameOfPerson = (person: Person): string => person.lastName;
