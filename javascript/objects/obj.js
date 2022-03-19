"use strict";

const o = {
  prop1: "val1",
  fun1() { return "fun1" },
  funDyn1() { return this.prop1 },
  fun2: () => "fun2",
  funStat2: () => this.prop1 // undefined
};

console.log(o);
console.log(o.fun1());
console.log(o.funDyn1());
console.log(o.fun1());
console.log(o.funStat2());
