/* Add a min() function to the BST class that finds the minimum value in a BST. */
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    // Method to insert a new node into the BST
    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    // Method to find the maximum value in the BST
    max() {
        if (this.root === null) {
            return null; // If the tree is empty
        }
        
        let currentNode = this.root;
        while (currentNode.right !== null) {
            currentNode = currentNode.right;
        }
        return currentNode.value;
    }

    // Method to find the minimum value in the BST
    min() {
        if (this.root === null) {
            return null; // If the tree is empty
        }

        let currentNode = this.root;
        while (currentNode.left !== null) {
            currentNode = currentNode.left;
        }
        return currentNode.value;
    }
}

// Example usage:
const bst = new BST();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(18);

console.log("Minimum value in the BST:", bst.min()); // Output: Minimum value in the BST: 3
console.log("Maximum value in the BST:", bst.max()); // Output: Maximum value in the BST: 18

