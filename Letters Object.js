/*Create an object that stores individual letters in an array and has a function for
displaying the letters as a single word. */
class Letters {
    constructor() {
        this.letters = [];
    }

    addLetter(letter) {
        this.letters.push(letter);
    }

    displayWord() {
        return this.letters.join('');
    }
}

// Example usage:
const word = new Letters();
word.addLetter('H');
word.addLetter('e');
word.addLetter('l');
word.addLetter('l');
word.addLetter('o');
console.log("Word:", word.displayWord()); // should output Word: Hello
