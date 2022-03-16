"use strict";

const set = new Set([1, 2, 3, 4]);
const set2 = new Set(set);
set2
  .add(5)
  .add(6);
set2
  .delete(2);

console.log("original set:");
console.log(set);
console.log("set made from other set:");
console.log(set2);
