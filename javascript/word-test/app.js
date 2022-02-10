// require
const READ = require("./js/file-reader.js");
const MAP = require("./js/string-maps.js");
const SCRABBLE = require("./js/scrabble.js");

// constants
const PATH = "./resources/valid-words.txt"

const computerWord = "peer";
const userWord = "pr";

const wordsSet = new Set();
const fileWords = READ.readFile(PATH);
for (const word of fileWords) {
    wordsSet.add(word);
}

if (!wordsSet.has(userWord)) {
    console.log("invalid word");
} else if (userWord === computerWord) {
    console.log("word may not be the same as computer word");
} else {
    const userMap = MAP.createMap(userWord);
    const computerMap = MAP.createMap(computerWord);
    if (MAP.validateMap(computerMap, userMap)) {
        console.log("correct word");
        const VALUE = SCRABBLE.valueWord(userWord);
        console.log(VALUE);
    } else {
        console.log("incorrect word");
    }
}
