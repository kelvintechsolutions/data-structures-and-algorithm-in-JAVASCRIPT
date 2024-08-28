/*  Using the Dictionary class, write a program that stores the number of occurrences
of words in a text. Your program should display each word in a text just once as
well as the number of times the word occurs in the text. */
// Function to count the occurrences of each word in a text
function countWordOccurrences(text) {
    const wordCounts = {};

    // Split the text into words using regular expression to handle punctuation
    const words = text.toLowerCase().match(/\b\w+\b/g);

    // Count the occurrences of each word
    words.forEach(word => {
        if (wordCounts[word]) {
            wordCounts[word]++;
        } else {
            wordCounts[word] = 1;
        }
    });

    return wordCounts;
}

// Function to display the word counts
function displayWordCounts(wordCounts) {
    for (const [word, count] of Object.entries(wordCounts)) {
        console.log(`${word}: ${count}`);
    }
}

// Main function
function main() {
    const text = `
        hello there, i am a Software Developer who  has prolificiency in using JavaScript, Java, Python, C++, C Programming and many other Low  level  programming languages
    `;

    const wordCounts = countWordOccurrences(text);
    displayWordCounts(wordCounts);
}

// Run the main function
main();
