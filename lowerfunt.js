/* Add the function lower(element) to the Set class. This function returns the great‐
est element in the set strictly less than the given element. Test your function in a
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
  
    lower(element) {
      let current = this.head;
      let lowerElement = null;
      while (current !== null) {
        if (current.element < element) {
          lowerElement = current.element;
        } else {
          break;
        }
        current = current.next;
      }
      return lowerElement;
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
  
    lower(element) {
      return this.items.lower(element);
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

// Test lower function
console.log("Lower than 3:", setA.lower(3)); // Output: 2
console.log("Lower than 5:", setA.lower(5)); // Output: 4
console.log("Lower than 1:", setA.lower(1)); // Output: null
  