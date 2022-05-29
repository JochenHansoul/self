const printWord = function (word: string) {
    basic.showString(word);
    radio.sendString(word);
};

const printNumbers = function (numbers: Array<number>) {
    numbers.forEach(n => basic.showNumber(n));
    basic.clearScreen();
};

const beatHeart = function (n: number = 1) {
    for (let i = 0; i < n; i++) {
        basic.showIcon(IconNames.SmallHeart);
        basic.showIcon(IconNames.Heart);
    }
};

const sayGoodbyeAndPrintNumbers = function () {
    printWord("Goodbye");
    printNumbers([0, 1, 2, 3]);
};

input.onButtonPressed(Button.A, function () {
    printWord("Hello");
    beatHeart();
    basic.clearScreen();
});

input.onButtonPressed(Button.B, sayGoodbyeAndPrintNumbers);

basic.forever(() => {});
