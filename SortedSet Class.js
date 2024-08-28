/* Modify the Set class so that the class stores its elements in sorted order. Write a
program to test your implementation */
class SortedSet {
    constructor() {
        this.elements = [];
    }

    // Helper function to find the index where an element should be inserted
    findIndex(element) {
        let low = 0;
        let high = this.elements.length - 1;

        while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            if (this.elements[mid] < element) {
                low = mid + 1;
            } else if (this.elements[mid] > element) {
                high = mid - 1;
            } else {
                return mid; // Element found
            }
        }

        return low; // Insertion point
    }

    // Add an element to the set
    add(element) {
        if (this.has(element)) {
            return; // Element already exists
        }

        const index = this.findIndex(element);
        this.elements.splice(index, 0, element);
    }

    // Check if an element is in the set
    has(element) {
        const index = this.findIndex(element);
        return this.elements[index] === element;
    }

    // Remove an element from the set
    delete(element) {
        const index = this.findIndex(element);
        if (this.elements[index] === element) {
            this.elements.splice(index, 1);
        }
    }

    // Return all elements in the set
    getAll() {
        return this.elements;
    }
}
// Test the SortedSet class
function testSortedSet() {
    const sortedSet = new SortedSet();

    // Adding elements
    sortedSet.add(10);
    sortedSet.add(5);
    sortedSet.add(15);
    sortedSet.add(7);

    // Display elements
    console.log('Elements in the sorted set:', sortedSet.getAll());

    // Check if elements are in the set
    console.log('Has 10:', sortedSet.has(10)); // true
    console.log('Has 8:', sortedSet.has(8));  // false

    // Remove an element
    sortedSet.delete(10);
    console.log('Elements in the sorted set after deleting 10:', sortedSet.getAll());

    // Add more elements
    sortedSet.add(3);
    sortedSet.add(12);
    console.log('Elements in the sorted set after adding 3 and 12:', sortedSet.getAll());
}

testSortedSet();
