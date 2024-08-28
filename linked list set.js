/* Modify the Set class so that it uses a linked list to store its elements rather than an
array. Write a program to test your implementation. */
class Node {
    constructor(element) {
      this.element = element;
      this.next = null;
    }
  }
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    // Add element to the list in sorted order
    add(element) {
      const newNode = new Node(element);
  
      if (this.head === null || this.head.element > element) {
        newNode.next = this.head;
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next !== null && current.next.element < element) {
          current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;
      }
      this.size++;
    }
  
    // Check if element is in the list
    has(element) {
      let current = this.head;
      while (current !== null) {
        if (current.element === element) {
          return true;
        }
        current = current.next;
      }
      return false;
    }
  
    // Remove element from the list
    remove(element) {
      if (this.head === null) return;
  
      if (this.head.element === element) {
        this.head = this.head.next;
        this.size--;
        return;
      }
  
      let current = this.head;
      while (current.next !== null) {
        if (current.next.element === element) {
          current.next = current.next.next;
          this.size--;
          return;
        }
        current = current.next;
      }
    }
  
    // Get all elements as an array (for easy viewing)
    getItems() {
      let result = [];
      let current = this.head;
      while (current !== null) {
        result.push(current.element);
        current = current.next;
      }
      return result;
    }
  }
  class SortedSet {
    constructor() {
      this.items = new LinkedList();
    }
  
    add(element) {
      if (!this.items.has(element)) {
        this.items.add(element);
      }
      return this;
    }
  
    has(element) {
      return this.items.has(element);
    }
  
    remove(element) {
      this.items.remove(element);
      return this;
    }
  
    getItems() {
      return this.items.getItems();
    }
  
    size() {
      return this.items.size;
    }
  
    union(otherSet) {
      const unionSet = new SortedSet();
      this.getItems().forEach(element => unionSet.add(element));
      otherSet.getItems().forEach(element => unionSet.add(element));
      return unionSet;
    }
  
    intersection(otherSet) {
      const intersectionSet = new SortedSet();
      this.getItems().forEach(element => {
        if (otherSet.has(element)) {
          intersectionSet.add(element);
        }
      });
      return intersectionSet;
    }
  
    difference(otherSet) {
      const differenceSet = new SortedSet();
      this.getItems().forEach(element => {
        if (!otherSet.has(element)) {
          differenceSet.add(element);
        }
      });
      return differenceSet;
    }
  }
// Create an instance of SortedSet
const setA = new SortedSet();
setA.add(3);
setA.add(1);
setA.add(2);

console.log("Set A:", setA.getItems()); // Output: [1, 2, 3]

// Test removing an element
setA.remove(2);
console.log("Set A after removing 2:", setA.getItems()); // Output: [1, 3]

// Test union
const setB = new SortedSet();
setB.add(4);
setB.add(5);

const unionSet = setA.union(setB);
console.log("Union of A and B:", unionSet.getItems()); // Output: [1, 3, 4, 5]

// Test intersection
setB.add(3);
const intersectionSet = setA.intersection(setB);
console.log("Intersection of A and B:", intersectionSet.getItems()); // Output: [3]

// Test difference
const differenceSet = setA.difference(setB);
console.log("Difference of A and B:", differenceSet.getItems()); // Output: [1]
      