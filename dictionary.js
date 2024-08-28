/* Write a program that takes a set of names and phone numbers from a text file and
stores them in a Dictionary object. Include in your program the ability to display
one phone number, display all phone numbers, add new phone numbers, remove
phone numbers, and clear out the list of numbers. */
const fs = require('fs');

// Function to load phone numbers from a file into a dictionary
function loadPhoneNumbers(filename) {
    let phoneBook = {};
    if (fs.existsSync(filename)) {
        const data = fs.readFileSync(filename, 'utf-8');
        const lines = data.split('\n');
        lines.forEach(line => {
            if (line.trim()) {
                const [name, number] = line.split(':');
                phoneBook[name.trim()] = number.trim();
            }
        });
    }
    return phoneBook;
}

// Function to save phone numbers from the dictionary back to the file
function savePhoneNumbers(phoneBook, filename) {
    let data = '';
    for (const [name, number] of Object.entries(phoneBook)) {
        data += `${name}:${number}\n`;
    }
    fs.writeFileSync(filename, data);
}

// Function to display a single phone number
function displayPhoneNumber(phoneBook, name) {
    if (phoneBook[name]) {
        console.log(`${name}: ${phoneBook[name]}`);
    } else {
        console.log(`${name} not found in the phone book.`);
    }
}

// Function to display all phone numbers
function displayAllPhoneNumbers(phoneBook) {
    if (Object.keys(phoneBook).length > 0) {
        for (const [name, number] of Object.entries(phoneBook)) {
            console.log(`${name}: ${number}`);
        }
    } else {
        console.log("Phone book is empty.");
    }
}

// Function to add a new phone number
function addPhoneNumber(phoneBook, name, number) {
    phoneBook[name] = number;
    console.log(`${name} added/updated in the phone book.`);
}

// Function to remove a phone number
function removePhoneNumber(phoneBook, name) {
    if (phoneBook[name]) {
        delete phoneBook[name];
        console.log(`${name} removed from the phone book.`);
    } else {
        console.log(`${name} not found in the phone book.`);
    }
}

// Function to clear the entire phone book
function clearPhoneNumbers(phoneBook) {
    for (const name in phoneBook) {
        delete phoneBook[name];
    }
    console.log("Phone book cleared.");
}

// Main function to demonstrate the functionality
function main() {
    const filename = 'phonebook.txt';
    let phoneBook = loadPhoneNumbers(filename);

    while (true) {
        console.log("\nMenu:");
        console.log("1. Display one phone number");
        console.log("2. Display all phone numbers");
        console.log("3. Add a new phone number");
        console.log("4. Remove a phone number");
        console.log("5. Clear all phone numbers");
        console.log("6. Exit");

        const choice = prompt("Enter your choice: ");

        switch (choice) {
            case '1':
                const nameToDisplay = prompt("Enter the name: ");
                displayPhoneNumber(phoneBook, nameToDisplay);
                break;
            case '2':
                displayAllPhoneNumbers(phoneBook);
                break;
            case '3':
                const nameToAdd = prompt("Enter the name: ");
                const numberToAdd = prompt("Enter the phone number: ");
                addPhoneNumber(phoneBook, nameToAdd, numberToAdd);
                savePhoneNumbers(phoneBook, filename);
                break;
            case '4':
                const nameToRemove = prompt("Enter the name: ");
                removePhoneNumber(phoneBook, nameToRemove);
                savePhoneNumbers(phoneBook, filename);
                break;
            case '5':
                clearPhoneNumbers(phoneBook);
                savePhoneNumbers(phoneBook, filename);
                break;
            case '6':
                savePhoneNumbers(phoneBook, filename);
                console.log("Exiting the program.");
                return;
            default:
                console.log("Invalid choice. Please try again.");
        }
    }
}

// To run the main function and use prompts, use Node.js prompt-sync package or readline
const prompt = require('prompt-sync')();
main();
