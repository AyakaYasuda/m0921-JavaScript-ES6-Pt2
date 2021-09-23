'use strict';

const funcA = function (x, y) {
  const args = Array.prototype.slice.call(arguments);

  console.log(args);
  console.log(x, y, args[2], args[3]);
};
funcA(10, 20, 30, 40);

const funcB = (x, y, ...rest) => {
  console.log(rest);
  console.log('funcB array', x, y, rest[0], rest[1]);
};
funcB(10, 20, 30, 40);

const family = (lastName, ...firstNames) => {
  firstNames.forEach(firstName => {
    console.log(`${firstName} ${lastName}`);
  });
};
family('Smith', 'John', 'Mary', 'Alex', 'Sarah');
