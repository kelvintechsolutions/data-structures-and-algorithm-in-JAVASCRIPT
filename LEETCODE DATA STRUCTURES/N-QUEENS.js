/* The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.

 

Example 1:


Input: n = 4
Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above
Example 2:

Input: n = 1
Output: [["Q"]]
 

Constraints:

1 <= n <= 9 */
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
