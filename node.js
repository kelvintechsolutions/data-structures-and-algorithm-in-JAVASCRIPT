/* According to legend, the first-century Jewish historian Flavius Josephus was about
to be captured along with a band of 40 compatriots by Roman soldiers during the
Jewish-Roman War. The Jewish soldiers decided that they preferred suicide to being
captured and devised a plan for their demise. They were to form a circle and kill
every third soldier until they were all dead. Josephus and one other decided they
wanted no part of this and quickly calculated where they needed to place themselves
so they would be the last survivors. Write a program that allows you to place n
people in a circle and specify that every mth person will be killed. The program
should determine the number of the last two people left in the circle. Use a circularly
linked list to solve the problem. */
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            newNode.next = this.head;
        } else {
            let temp = this.head;
            while (temp.next !== this.head) {
                temp = temp.next;
            }
            temp.next = newNode;
            newNode.next = this.head;
        }
        this.size++;
    }

    remove(node) {
        if (this.head === node) {
            let temp = this.head;
            while (temp.next !== this.head) {
                temp = temp.next;
            }
            if (this.head === this.head.next) {
                this.head = null;
            } else {
                temp.next = this.head.next;
                this.head = temp.next;
            }
        } else {
            let temp = this.head;
            while (temp.next !== node) {
                temp = temp.next;
            }
            temp.next = node.next;
        }
        this.size--;
    }

    getLastTwo(m) {
        let current = this.head;
        while (this.size > 2) {
            let count = 1;
            while (count !== m) {
                current = current.next;
                count++;
            }
            const nextNode = current.next;
            this.remove(current);
            current = nextNode;
        }

        return [this.head.value, this.head.next.value];
    }
}

function josephusProblem(n, m) {
    const circle = new CircularLinkedList();
    for (let i = 1; i <= n; i++) {
        circle.append(i);
    }

    const lastTwo = circle.getLastTwo(m);
    return lastTwo;
}

// Example usage:
const n = 50;  // Total number of people in the circle
const m = 3;   // Every m-th person will be killed

const lastTwoPeople = josephusProblem(n, m);
console.log(`The last two people remaining are: ${lastTwoPeople[0]} and ${lastTwoPeople[1]}`);
