/* Modify the Queue class to create a Deque class. A deque is a queue-like structure
that allows elements to be added and removed from both the front and the back of
the list. Test your class in a program */
function Deque() {
    this.items = [];
}

// Add an element to the front of the deque
Deque.prototype.addFront = function(element) {
    this.items.unshift(element);
};

// Add an element to the back of the deque (same as enqueue in a queue)
Deque.prototype.addBack = function(element) {
    this.items.push(element);
};

// Remove an element from the front of the deque (same as dequeue in a queue)
Deque.prototype.removeFront = function() {
    if (this.isEmpty()) {
        return "Underflow";
    }
    return this.items.shift();
};

// Remove an element from the back of the deque
Deque.prototype.removeBack = function() {
    if (this.isEmpty()) {
        return "Underflow";
    }
    return this.items.pop();
};

// Check if the deque is empty
Deque.prototype.isEmpty = function() {
    return this.items.length === 0;
};

// Get the number of elements in the deque
Deque.prototype.size = function() {
    return this.items.length;
};

// Get a string representation of the deque
Deque.prototype.toString = function() {
    return this.items.map(item => item.name).join(', ');
};

// Test the Deque class

function Patient(name, code) {
    this.name = name;
    this.code = code;
}

const deque = new Deque();

// Adding elements to the front and back of the deque
let p = new Patient("Smith", 5);
deque.addBack(p);

p = new Patient("Jones", 4);
deque.addFront(p);

p = new Patient("Fehrenbach", 6);
deque.addBack(p);

p = new Patient("Brown", 1);
deque.addFront(p);

console.log("Deque after adding elements:");
console.log(deque.toString()); // Brown, Jones, Smith, Fehrenbach

// Removing elements from the front and back of the deque
let removed = deque.removeFront();
console.log("Removed from front: " + removed.name);
console.log(deque.toString()); // Jones, Smith, Fehrenbach

removed = deque.removeBack();
console.log("Removed from back: " + removed.name);
console.log(deque.toString()); // Jones, Smith

removed = deque.removeFront();
console.log("Removed from front: " + removed.name);
console.log(deque.toString()); // Smith

removed = deque.removeBack();
console.log("Removed from back: " + removed.name);
console.log(deque.toString()); // (empty)
