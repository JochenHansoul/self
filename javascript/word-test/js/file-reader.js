const FS = require("fs");

// file reader (synchrone)
exports.readFile = (path, fs = FS) => {
    return fs.readFileSync(path, "utf8")
        .split("\n")
        .slice(0, -1);
};
