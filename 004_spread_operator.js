'use strict';

const arr1 = [1,2,3,4];
const arr2 = [5,6,7,8];

const numbersES5 = arr1.concat(arr2);
console.log(numbersES5);

const numbersES6 = [...arr1,...arr2];
console.log(numbersES6);


