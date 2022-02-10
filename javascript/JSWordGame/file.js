const FS = require("fs");
const UTIL  = require('util');

const HIGH_SCORE_FILE = "./resources/high-score.txt";

// file reader (synchrone)
exports.readFile = (path, fs = FS) => {
    return fs.readFileSync(path, "utf8")
        .split("\n")
        .slice(0, -1);
};

// file writer
exports.writeFile = (path, string) => {
  const logger = FS.createWriteStream(path, {
    flags: 'a' // 'a' means appending (old data will be preserved)
  })
  for (const line of string) {
    logger.write("\n" + line) // append string to your file
  }
  logger.end() 
};
