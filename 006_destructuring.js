'use strict';

const arr = [10, 20, 30, 40, 50];

// const ten = arr[0];
// const twenty = arr[1];

const [ten, twenty, , , fifty] = arr;
console.log(ten, twenty, fifty);

console.log('-----------------------------');

const person = {
  firstName: 'John',
  lastName: 'Smith',
  age: 30,
};

const { firstName, lastName, age } = person;
console.log(firstName, lastName, age);

// Distructuring in a function #1
const aboutMe = params => {
  const { firstName, lastName } = params;
  console.log(`My name is ${firstName} ${lastName}.`);
};
aboutMe(person);

// Distructuring in a function #1
const aboutMe2 = ({firstName, lastName, age}) => {
    console.log(`My name is ${firstName} ${lastName}.`);
    console.log(age);
}
aboutMe2(person);