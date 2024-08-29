/* Add a function to the BST class that counts the number of nodes in a BST. */
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;``
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    // Function to insert a node in the BST
    insert(data) {
        const newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
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

    // Function to count the number of nodes in the BST
    countNodes() {
        return this.countNodesHelper(this.root);
    }

    countNodesHelper(node) {
        if (node === null) {
            return 0;
        } else {
            return 1 + this.countNodesHelper(node.left) + this.countNodesHelper(node.right);
        }
    }
}

// Example usage
const bst = new BST();
bst.insert(15);
bst.insert(25);
bst.insert(10);
bst.insert(7);
bst.insert(22);
bst.insert(17);
bst.insert(13);

console.log("Number of nodes in the BST:", bst.countNodes()); // Output: 7
