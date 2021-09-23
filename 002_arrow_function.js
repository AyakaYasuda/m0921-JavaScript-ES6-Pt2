'use strict';

const numbers = [2, 4, 8, 10];

const newNumber1 = numbers.map(function (number) {
  return number * 10;
});
console.log(newNumber1);

const newNumbers2 = numbers.map(number => {
  return number * 10;
});
console.log(newNumbers2);

// shothand
// const newNumbers2 = numbers.map(number => number * 10);

const personES5 = {
  firstName: 'Nick',
  lastName: 'Doe',
  sayFullName: function () {
    return function () {
      console.log(this === personES5); // true
      console.log(this.firstName + ' ' + this.lastName);
    }.bind(personES5);
  },
};
personES5.sayFullName()();

const personES6 = {
  firstName: 'Nick',
  lastName: 'Doe',
  sayFullName: function () {
    console.log(this === personES6); // true (if you use arrow function here, this will be window)
    return () => {
      console.log(this === personES6); // true
      console.log(this.firstName + ' ' + this.lastName);
    };
  },
};
personES6.sayFullName()();
