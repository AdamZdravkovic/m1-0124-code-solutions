'use strict';
let student = {
  firstName: 'Adam',
  lastName: 'Zdravkovic',
  age: 27,
};
const fullName = `${student.firstName} ${student.lastName}`;
console.log(`value of fullName: ${fullName}`);
student.livesInIrvine = false;
student.previousOccupation = 'Bartender';
console.log(`value of student.livesInIrvine: ${student.livesInIrvine}`);
console.log(
  `value of student.previousOccupation: ${student.previousOccupation}`
);
console.log('value of student:', student);
let vehicle = {
  make: 'Chevrolet',
  model: 'Equinox',
  year: 2019,
};
vehicle['color'] = 'Black';
vehicle['isConvertible'] = false;
console.log('value of vehicle[color]:', vehicle['color']);
console.log('value of vehicle[isConvertible]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);
let pet = {
  name: 'Grimlee',
  kind: 'Cat',
};
delete pet.name;
delete pet.kind;
console.log('value of pet:', pet);
