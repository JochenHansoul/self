"use strict";
function global1() {};
function global2() {};
function global3() {};

var var1 = 1;
var var2 = 1;
var var3 = 1;

global.globalVar1 = 1;
global.globalVar2 = 1;
global.globalVar3 = 1;

const fun1 = () => {};
const fun2 = () => {};
const fun3 = () => {};

console.log(this);
console.log(global);
//console.log(globalThis);
