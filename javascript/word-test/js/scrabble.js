const valueLetter = c => {
    switch (c) {
        case "E":
        case "A":
        case "I":
        case "O":
        case "N":
        case "R":
        case "T":
        case "L":
        case "S":
        case "U":
            return 1;
        case "D":
        case "G":
            return 2;
        case "B":
        case "C":
        case "M":
        case "P":
            return 3;
        case "F":
        case "H":
        case "V":
        case "W":
        case "Y":
            return 4;
        case "K":
            return 5;
        case "J":
        case "X":
            return 8;
        case "Q":
        case "Z":
            return 10;
        default:
            return 0;
    };
};

exports.valueWord = word => {
    let value = 0;
    for (let c of word.toUpperCase()) {
        value += valueLetter(c);
    }
    return value;
};
