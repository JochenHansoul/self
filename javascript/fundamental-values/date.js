"use strict";

console.log(Date, typeof Date);
console.log(Date(), typeof Date());
console.log(new Date(), typeof new Date());
console.log("" + new Date(Date.now()));

console.log("\nprototype:");
console.log(Date.prototype, typeof Date.prototype);
