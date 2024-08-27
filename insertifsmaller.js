/* Write a function that inserts an element into a list only if the element to be inserted
is smaller than any of the elements currently in the list. */

function insertIfSmaller(list, element) {
    // Check if the list is empty or if the element is smaller than the smallest element in the list
    if (list.length === 0 || element < Math.min(...list)) {
        list.push(element);
        console.log(`${element} has been added to the list.`);
    } else {
        console.log(`${element} is not smaller than the current elements in the list.`);
    }
    return list;
}

// Example usage:
let numbers = [10, 20, 30];
let updatedNumbers = insertIfSmaller(numbers, 25);  // Output: 25 is not smaller than the current elements in the list.
let updatedNumbers2 = insertIfSmaller(numbers, 5);  // Output: 5 has been added to the list.

let words = ["apple", "banana", "cherry"];
let updatedWords = insertIfSmaller(words, "blueberry"); // Output: blueberry is not smaller than the current elements in the list.
let updatedWords2 = insertIfSmaller(words, "avocado");  // Output: avocado has been added to the list.

console.log(updatedNumbers);  // [10, 20, 30]
console.log(updatedNumbers2); // [10, 20, 30, 5]
console.log(updatedWords);    // ["apple", "banana", "cherry"]
console.log(updatedWords2);   // ["apple", "banana", "cherry", "avocado"]
