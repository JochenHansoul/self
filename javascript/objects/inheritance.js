"use strict";

const abstractO = {
  abstractMethod() {
    console.log("abstract method");
  }
};

const oA = Object.setPrototypeOf({
  methodA() {
    console.log("hethod A");
  }
}, abstractO);

const oB = Object.setPrototypeOf({
  methodB() {
    console.log("hethod B");
  }
}, abstractO);

const oAB = Object.setPrototypeOf({
  methodA: oA.methodA,
  methodB: oB.methodB
}, abstractO);

oA.abstractMethod();
oA.methodA();

oB.abstractMethod();
oB.methodB();

oAB.abstractMethod();
oAB.methodA();
oAB.methodB();
