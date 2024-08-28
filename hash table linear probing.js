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
    insert(key, value) {
        let index = this.hash(key);

        while (this.table[index] !== null) {
            // Linear probing
            index = (index + 1) % this.size;
        }

        this.table[index] = [key, value];
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

        return null; // Key not found
    }
}
