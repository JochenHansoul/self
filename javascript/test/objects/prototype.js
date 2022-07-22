console.log(Object.prototype);
console.log(Object.getPrototypeOf({}));

const newObject = {
    somekey: "someValue"
};
const o = Object.create(newObject, {});
console.log(Object.getPrototypeOf(o));
