// require
const READ = require("../js/file-reader.js");

// constants
const PATH = "./resources/words.txt"; // why not ../resources/words.txt ???

// tests
test("filereader works", () => {
    const words = READ.readFile(PATH);
    const array = ["apple", "banana", "peer"];
    expect(words).toEqual(array)
});
