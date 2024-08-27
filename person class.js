/* Create a Person class that stores a person’s name and their gender. Create a list of
at least 10 Person objects. Write a function that displays all the people in the list of
the same gender. */
// Define the Person class with constructor and a static method
class Person {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }

    // Optional: A method to display person information
    display() {
        console.log(`Name: ${this.name}, Gender: ${this.gender}`);
    }

    // Static method to create a sample list of people
    static createSamplePeople() {
        return [
            new Person('Alice', 'Female'),
            new Person('Bob', 'Male'),
            new Person('Charlie', 'Male'),
            new Person('Diana', 'Female'),
            new Person('Eve', 'Female'),
            new Person('Frank', 'Male'),
            new Person('Grace', 'Female'),
            new Person('Hank', 'Male'),
            new Person('Ivy', 'Female'),
            new Person('Jack', 'Male')
        ];
    }
}

// Function to display people of the same gender
function displayByGender(list, gender) {
    const filteredPeople = list.filter(person => person.gender === gender);
    if (filteredPeople.length === 0) {
        console.log(`No people found with gender ${gender}.`);
    } else {
        console.log(`People with gender ${gender}:`);
        filteredPeople.forEach(person => person.display());
    }
}

// Create a sample list of people
const people = Person.createSamplePeople();

// Example usage:
displayByGender(people, 'Female');
displayByGender(people, 'Male');
displayByGender(people, 'Non-binary');  // No people found with this gender
