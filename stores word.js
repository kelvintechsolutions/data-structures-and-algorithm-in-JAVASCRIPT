/*  Write a program that stores the words from a large text file in a BST and displays
the number of times each word occurs in the text. */

const fs = require('fs');

class Node {
    constructor(word) {
        this.word = word;
        this.count = 1; // Initialize the count of the word to 1
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    // Method to insert a word into the BST
    insert(word) {
        this.root = this.insertNode(this.root, word);
    }

    insertNode(node, word) {
        if (node === null) {
            return new Node(word);
        }

        if (word < node.word) {
            node.left = this.insertNode(node.left, word);
        } else if (word > node.word) {
            node.right = this.insertNode(node.right, word);
        } else {
            // If the word already exists, increment the count
            node.count++;
        }
        return node;
    }

    // Method to display the words and their counts in order
    display(node = this.root) {
        if (node !== null) {
            this.display(node.left);
            console.log(`${node.word}: ${node.count}`);
            this.display(node.right);
        }
    }
}

// Function to process text and store words in the BST
function processTextFile(filename) {
    const bst = new BST();

    // Read the file content
    const text = fs.readFileSync(filename, 'utf-8');

    // Split the text into words and clean up punctuation
    const words = text.toLowerCase().replace(/[^a-z0-9\s]/g, '').split(/\s+/);

    // Insert words into the BST
    words.forEach(word => {
        if (word) {
            bst.insert(word);
        }
    });

    // Display the word counts
    bst.display();
}

// Example usage:
const filename = 'largeTextFile.txt'; 
