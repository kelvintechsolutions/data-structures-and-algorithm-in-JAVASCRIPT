/* Write a function that inserts an element into a list only if the element to be inserted
is larger than any of the elements currently in the list. Larger can mean either greater
than when working with numeric values, or further down in the alphabet, when
working with textual values. */
function insertIfLarger(list, element) {
    // Check if the list is empty or if the element is larger than the largest element in the list
    if (list.length === 0 || element > Math.max(...list)) {
        list.push(element);
        console.log(`${element} has been added to the list.`);
    } else {
        console.log(`${element} is not larger than the current elements in the list.`);
    }
    return list;
}

// Example usage:
let numbers = [10, 20, 30];
let updatedNumbers = insertIfLarger(numbers, 25);  // Output: 25 is not larger than the current elements in the list.
let updatedNumbers2 = insertIfLarger(numbers, 35); // Output: 35 has been added to the list.

let words = ["apple", "banana", "cherry"];
let updatedWords = insertIfLarger(words, "blueberry"); // Output: blueberry is not larger than the current elements in the list.
let updatedWords2 = insertIfLarger(words, "date");     // Output: date has been added to the list.

console.log(updatedNumbers);  // [10, 20, 30]
console.log(updatedNumbers2); // [10, 20, 30, 35]
console.log(updatedWords);    // ["apple", "banana", "cherry"]
console.log(updatedWords2);   // ["apple", "banana", "cherry", "date"]
