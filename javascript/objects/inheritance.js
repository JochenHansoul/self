"use strict";

// methods
const methodA = () => {
  console.log("method A");
}

const methodB = () => {
  console.log("method B");
}

// objects
const abstractObject = {
  abstractMethod() {
    console.log("abstract method");
  }
};

const objectA = Object.setPrototypeOf({
  methodA: methodA
}, abstractObject);

const objectB = Object.setPrototypeOf({
  methodB: methodB
}, abstractObject);

const objectAB = Object.setPrototypeOf({
  methodA: methodA,
  methodB: methodB
}, abstractObject);

// main
objectA.abstractMethod();
objectA.methodA();

objectB.abstractMethod();
objectB.methodB();

objectAB.abstractMethod();
objectAB.methodA();
objectAB.methodB();
