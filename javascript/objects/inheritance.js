"use strict";

const abstractObject = {
  abstractMethod() {
    console.log("abstract method");
  }
};

const objectA = Object.setPrototypeOf({
  methodA() {
    console.log("hethod A");
  }
}, abstractObject);

const objectB = Object.setPrototypeOf({
  methodB() {
    console.log("hethod B");
  }
}, abstractObject);

const objectAB = Object.setPrototypeOf({
  methodA: objectA.methodA,
  methodB: objectB.methodB
}, abstractObject);

objectA.abstractMethod();
objectA.methodA();

objectB.abstractMethod();
objectB.methodB();

objectAB.abstractMethod();
objectAB.methodA();
objectAB.methodB();
