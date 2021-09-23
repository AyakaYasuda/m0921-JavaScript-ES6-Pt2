'use strict';

// ===== map =====

const mapData = new Map();

mapData.set('name', 'John');
mapData.set('age', 20);
mapData.set('inMarried', false);
mapData.set(true, 'male');
mapData.set(5, 'id');
const obj = {};
mapData.set(obj, 'person');

console.log('Before', mapData.size);
console.log('Before:', mapData);

mapData.delete(5);
console.log('After', mapData.size);
console.log('After:', mapData);

console.log(mapData.has('name')); // true
console.log(mapData.has('names')); // false

console.log('---------------------');

mapData.forEach((value, key) => {
  console.log(key, value);
});

const mapKeysArr = mapData.keys();
console.log(mapKeysArr);

const mapValuesArr = mapData.values();
console.log(mapValuesArr);

const mapArr = mapData.entries();
console.log(mapArr);

for (const [key, value] of mapData.entries()) {
    console.log(`${key} -----> ${value}`);
}


// ===== set =====

const setData = new Set(['John', 'Alex', 10, 25, 'John', 'Mary']);
console.log(setData);
