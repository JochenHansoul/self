const someFunction = () => "some function";

const asyncFunction = async function () {
    const result = await someFunction();
    console.log(result);
};

console.log("before");
asyncFunction();
console.log("after");
