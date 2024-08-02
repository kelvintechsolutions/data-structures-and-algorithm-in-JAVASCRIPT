/*Create a grades object that stores a set of student grades in an object. Provide a
function for adding a grade and a function for displaying the student’s grade average*/
class Grades {
    constructor() {
        this.grades = [];
    }

    addGrade(grade) {
        this.grades.push(grade);
    }

    getAverage() {
        const sum = this.grades.reduce((acc, curr) => acc + curr, 0);
        return sum / this.grades.length;
    }
}

// Example usage:
const studentGrades = new Grades();
studentGrades.addGrade(90);
studentGrades.addGrade(80);
studentGrades.addGrade(85);
console.log("Grade Average:", studentGrades.getAverage()); // it should output the Grade Average 
