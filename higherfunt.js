/* Add the function higher(element) to the Set class. This function returns the least
element in the set strictly greater than the given element. Test your function in a
program. */
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
  
    higher(element) {
      let current = this.head;
      while (current !== null) {
        if (current.element > element) {
          return current.element;
        }
        current = current.next;
      }
      return null; // Return null if no higher element is found
    }
  
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
  
    higher(element) {
      return this.items.higher(element);
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
setA.add(5);
setA.add(2);
setA.add(4);

console.log("Set A:", setA.getItems()); // Output: [1, 2, 3, 4, 5]

// Test higher function
console.log("Higher than 2:", setA.higher(2)); // Output: 3
console.log("Higher than 4:", setA.higher(4)); // Output: 5
console.log("Higher than 5:", setA.higher(5)); // Output: null
  