class HashTable {
    constructor(size) {
        this.size = size;
        this.table = new Array(size).fill(null);
    }

    // Hash function to calculate index for a given key
    hash(key) {
        let hashValue = 0;
        for (let i = 0; i < key.length; i++) {
            hashValue += key.charCodeAt(i);
        }
        return hashValue % this.size;
    }

    // Insert key-value pair into the hash table
    insert(key) {
        let index = this.hash(key);

        while (this.table[index] !== null && this.table[index][0] !== key) {
            // Linear probing
            index = (index + 1) % this.size;
        }

        if (this.table[index] === null) {
            this.table[index] = [key, 1];
        } else {
            this.table[index][1]++;
        }
    }

    // Retrieve value for a given key
    lookup(key) {
        let index = this.hash(key);

        while (this.table[index] !== null) {
            if (this.table[index][0] === key) {
                return this.table[index][1];
            }
            // Linear probing
            index = (index + 1) % this.size;
        }

        return 0; // Key not found
    }

    // Get all key-value pairs
    getAll() {
        return this.table.filter(entry => entry !== null);
    }
}
const fs = require('fs');
const readline = require('readline');

// Function to count word occurrences from a file
function countWords(filename) {
    const hashTableSize = 1000; // Size of the hash table (adjust as needed)
    const hashTable = new HashTable(hashTableSize);

    const stream = readline.createInterface({
        input: fs.createReadStream(filename),
        crlfDelay: Infinity
    });

    stream.on('line', (line) => {
        const words = line.toLowerCase().match(/\b\w+\b/g); // Extract words
        if (words) {
            words.forEach(word => hashTable.insert(word));
        }
    });

    stream.on('close', () => {
        const wordCounts = hashTable.getAll();
        wordCounts.forEach(([word, count]) => {
            console.log(`${word}: ${count}`);
        });
    });
}

// Main function
function main() {
    const filename = 'textfile.txt'; // Path to the text file
    countWords(filename);
}

main();
