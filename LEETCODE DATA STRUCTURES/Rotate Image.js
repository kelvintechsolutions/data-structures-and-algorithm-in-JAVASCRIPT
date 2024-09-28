const readline = require('readline');

// Create readline interface for taking user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const rotateMatrix = function(matrix) {
    const n = matrix.length;

    // Step 1: Transpose the matrix (i.e., swap matrix[i][j] with matrix[j][i])
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];  // Swap elements
        }
    }

    // Step 2: Reverse each row
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }

    console.log("Rotated Matrix by 90 degrees clockwise:");
    console.table(matrix);
};

// Collect user input using readline
const inputMatrix = [];
rl.question('Enter the size of the matrix (n): ', (size) => {
    const n = parseInt(size);
    let count = 0;

    console.log(`Enter the matrix rows, one by one:`);

    // Read rows of the matrix
    const readRow = () => {
        if (count < n) {
            rl.question(`Enter row ${count + 1} (space-separated values): `, (row) => {
                inputMatrix.push(row.split(' ').map(Number));
                count++;
                readRow();  // Read the next row
            });
        } else {
            rl.close();  // Close the input stream when done
            console.log("Original Matrix:");
            console.table(inputMatrix);

            // Rotate the matrix
            rotateMatrix(inputMatrix);
        }
    };

    readRow();  // Start reading rows
});
