"use strict";

// composite functions
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

const driver2 = state => ({
  getPosition: () => state.position,
  drive: () => {
    state.position = state.position + state.speed * 2;
  }
});

// composition object
const robotDog = (name) => {
  const state = {
    name: name,
    speed: 100,
    position: 0
  };
  return Object.assign({}, barker(state), driver(state), driver2(state));
};

// main
const robotDog1 = robotDog("fido");
console.log(robotDog1.bark());
console.log(robotDog1.getPosition());
robotDog1.drive(); // driver2 method is used
console.log(robotDog1.getPosition());
