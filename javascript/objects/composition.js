"use strict";

// this function returns an object with a method in
const barker = state => ({
  bark: () => "Woof, I'm " + state.name
});

const driver = state => ({
  getPosition: () => state.position,
  drive: () => {
    state.position = state.position + state.speed;
  }
});

// composition object
const robotDog = (name) => {
  const state = {
    name: name,
    speed: 100,
    position: 0
  };
  return Object.assign({}, barker(state), driver(state));
};

//const response = barker({name: "fido"}).bark();
//console.log(response);

const robotDog1 = robotDog("fido");
console.log(robotDog1.bark());
console.log(robotDog1.getPosition());
robotDog1.drive();
console.log(robotDog1.getPosition());
