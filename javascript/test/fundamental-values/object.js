"use strict";

console.log(Object, typeof Object);
console.log(Object(), typeof Object());
console.log(new Object(), typeof new Object());
console.log(Object.create(null), typeof Object.create(null));

console.log("\nprototype:");
console.log(Object.prototype, typeof Object.prototype);
