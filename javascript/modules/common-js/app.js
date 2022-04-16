//console.log(require.cache);
// if require.cache is placed after the require
// it will also print path to the required modules
const { var1, var3, var4 } = require("./mod.js");
//console.log(fun(1));
console.log(var1);
console.log(var3);
console.log(var4);

//console.log(module); // prints module object
//console.log(exports); // {}
