/* Add a function to the BST class that counts the number of edges in a BST. */
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

    // Method to count the number of nodes in the BST
    countNodes(node = this.root) {
        if (node === null) {
            return 0;
        }
        return 1 + this.countNodes(node.left) + this.countNodes(node.right);
    }

    // Method to count the number of edges in the BST
    countEdges() {
        // Number of edges = Number of nodes - 1
        const numberOfNodes = this.countNodes();
        return numberOfNodes > 0 ? numberOfNodes - 1 : 0;
    }
}

// Example usage:
const bst = new BST();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

console.log("Number of edges:", bst.countEdges()); // Output: Number of edges: 4
