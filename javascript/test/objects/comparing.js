const o = {};

console.log(o instanceof Object);
console.log([] instanceof Object);
console.log(o === {});
console.log([] instanceof Object);
console.log(Object.prototype.toString.call(o) === "[object Object]"); // [object Object]
console.log(Object.prototype.toString.call([]) === "[object Object]"); // [object Object]

console.log(typeof []);
