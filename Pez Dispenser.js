class Stack {
    constructor() {
        this.items = [];
    }

    // Push an item onto the stack
    push(item) {
        this.items.push(item);
    }

    // Pop an item from the stack
    pop() {
        return this.items.pop();
    }

    // Peek at the top item of the stack
    peek() {
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get the size of the stack
    size() {
        return this.items.length;
    }
}

// Function to remove yellow candies
function removeYellowCandies(stack) {
    const tempStack = new Stack();

    // Transfer all candies to the temp stack, skipping yellow ones
    while (!stack.isEmpty()) {
        const candy = stack.pop();
        if (candy !== 'yellow') {
            tempStack.push(candy);
        }
    }

    // Transfer candies back to the original stack to maintain order
    while (!tempStack.isEmpty()) {
        stack.push(tempStack.pop());
    }
}

// Example usage:
const pezDispenser = new Stack();

// Fill the dispenser with candies
pezDispenser.push('red');
pezDispenser.push('yellow');
pezDispenser.push('white');
pezDispenser.push('red');
pezDispenser.push('yellow');
pezDispenser.push('white');

// Display original stack
console.log('Original dispenser stack:', pezDispenser.items);

// Remove yellow candies
removeYellowCandies(pezDispenser);

// Display updated stack
console.log('Updated dispenser stack (yellow candies removed):', pezDispenser.items);
