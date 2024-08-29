/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let results = [];
    let board = Array.from({ length: n }, () => Array(n).fill('.'));
    let cols = new Set(); // Columns where queens are placed
    let diag1 = new Set(); // Diagonals from top-left to bottom-right
    let diag2 = new Set(); // Diagonals from bottom-left to top-right

    const backtrack = (row) => {
        if (row === n) {
            // All queens are placed, add board configuration to results
            results.push(board.map(row => row.join('')));
            return;
        }
        
        for (let col = 0; col < n; col++) {
            let d1 = row - col; // Diagonal from top-left to bottom-right
            let d2 = row + col; // Diagonal from bottom-left to top-right

            if (cols.has(col) || diag1.has(d1) || diag2.has(d2)) {
                continue; // Skip if column or diagonal is already attacked
            }

            // Place queen
            board[row][col] = 'Q';
            cols.add(col);
            diag1.add(d1);
            diag2.add(d2);

            // Move to the next row
            backtrack(row + 1);

            // Remove queen and backtrack
            board[row][col] = '.';
            cols.delete(col);
            diag1.delete(d1);
            diag2.delete(d2);
        }
    };

    backtrack(0);
    return results;
};

// Example usage
console.log(solveNQueens(4)); // Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
console.log(solveNQueens(1)); // Output: [["Q"]]
