"use strict";

const set = new Set([1, 2, 3, 4]);
const set2 = new Set(set);
set2
  .add(5)
  .add(6, 7); // only ads first value

console.log("original set:");
console.log(set);
console.log("set made from other set:");
console.log(set2.values());

console.log("adding two sets together:");
console.log(new Set([...set, ...set2, ...new Set([9, 10])]));

// adding a list of sets together
const sets = [
  new Set([1, 2]),
  new Set([3, 4]),
  new Set([1, 7])
];

const v = sets.reduce((acc, cur) => new Set([...acc, ...cur]), Object.freeze(new Set()));
console.log(v);
