
const print = (word: string) => {
    basic.showString(word)
    radio.sendString(word)
}

const printNumbers = (numbers: Array<number>) => {
    numbers.forEach(n => basic.showNumber(n))
    basic.clearScreen()
}

const beatHeart = (n: number = 1) => {
    for (let i = 0; i < n; i++) {
        basic.showIcon(IconNames.SmallHeart)
        basic.showIcon(IconNames.Heart)
    }
}

const sayGoodbyeAndPrintNumbers = () => {
    print("Goodbye")
    printNumbers([0, 1, 2, 3])
}

input.onButtonPressed(Button.A, () => {
    print("Hello")
    beatHeart()
    basic.clearScreen()
})

input.onButtonPressed(Button.B, sayGoodbyeAndPrintNumbers)

basic.forever(function () {
	
})