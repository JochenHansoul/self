// creates a map of al the characters and their amounts of a string
exports.createMap = s => {
    const map = new Map();
    for (let character of s) {
        if (map.has(character)) {
            map.set(character, map.get(character) + 1);
        } else {
            map.set(character, 1);
        }
    }
    return map;
};

// checks if characters in testMap are present in originalMap
// returns false if additional characters or erronous characters
// are found and true if not
exports.validateMap = (originalMap, testMap) => {
    if (testMap.size > originalMap.size) {
        return false;
    } else {
        const iterator = testMap.keys();
        let violation = false;
        let element = iterator.next();
        while (!element.done && !violation) {
            if (originalMap.has(element.value)
                && testMap.get(element.value) <= originalMap.get(element.value)) {
                element = iterator.next();
            } else {
                violation = true;
            }
        }
        return !violation; // if no violations (value is still false) will result true
    }
};
