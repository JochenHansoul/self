const MAPS = require("./string-maps.js");

// main
const word = "apple";
const userWord = "apple";

const wordMap = MAPS.createMap(word);
const userWordMap = MAPS.createMap(userWord);
const result = MAPS.verifyMap(wordMap, userWordMap);
console.log(result);
