const readline = require('readline');

// Set up readline to read input from the console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter operations (separated by space): ', (input) => {
    var ops = input.split(" ");
    console.log(calPoints(ops));
    rl.close();
});

/**
 * @param {string[]} ops - List of operations
 * @return {number} - Sum of scores after performing all operations
 */
var calPoints = function(ops) {
    var result = []; // Array to keep track of the scores

    // Iterate through each operation
    for (var i = 0; i < ops.length; i++) {
        var op = ops[i];

        if (op === "C") {
            result.pop(); // Remove the last score
        } else if (op === "D") {
            result.push(result[result.length - 1] * 2); // Double the last score and add to the record
        } else if (op === "+") {
            result.push(result[result.length - 1] + result[result.length - 2]); // Add the sum of the last two scores
        } else {
            result.push(parseInt(op)); // Convert the operation to an integer and add it to the record
        }
    }

    // Sum all the scores in the result array
    return result.reduce(function(sum, score) {
        return sum + score;
    }, 0);
};