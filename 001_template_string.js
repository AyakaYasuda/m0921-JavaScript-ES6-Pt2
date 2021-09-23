'use strict';

const name = 'John';
const age = 38;
const profession = 'instructor';

const personES5 = () => {
    console.log('My name is ' + name + ', \nI\'m ' + age + ' years old and I\'m a/an ' + profession);
} 
personES5();

const personES6 = () => {
    console.log(`My name is ${name}, I'm ${age} years old and I'm a/an ${profession}`);
}
personES6();

const greet = 'Hello World';
console.log(greet.startsWith('Hello'));
console.log(greet.endsWith('World'));
console.log(greet.includes('Wo'));
console.log(greet.repeat(3));
