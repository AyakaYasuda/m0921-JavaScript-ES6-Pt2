'use strict';

function personES5(firstName, lastName, profession) {
  if (firstName === undefined) {
    firstName = 'Larry';
  }
  if (lastName === undefined) {
    lastName = 'Smith';
  }
  if (profession === undefined) {
    profession = 'programmer';
  }
  console.log(
    `My name is ${firstName} ${lastName}, and I'm a/an ${profession}`
  );
}

personES5();

console.log('-------------------------------------');

function personES6(
  firstName = 'Larry',
  lastName = 'Smith',
  profession = 'programmer'
) {
  console.log(
    `My name is ${firstName} ${lastName}, and I'm a/an ${profession}`
  );
}
personES6();
