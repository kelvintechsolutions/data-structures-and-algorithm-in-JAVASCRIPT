/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    const isValid = (board, row, col, num) => {
        // Check if `num` is not in the current row
        for (let i = 0; i < 9; i++) {
            if (board[row][i] === num) return false;
        }
        // Check if `num` is not in the current column
        for (let i = 0; i < 9; i++) {
            if (board[i][col] === num) return false;
        }
        // Check if `num` is not in the current 3x3 sub-box
        const startRow = Math.floor(row / 3) * 3;
        const startCol = Math.floor(col / 3) * 3;
        for (let r = startRow; r < startRow + 3; r++) {
            for (let c = startCol; c < startCol + 3; c++) {
                if (board[r][c] === num) return false;
            }
        }
        return true;
    };

    const solve = () => {
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                if (board[r][c] === '.') {
                    for (let num = 1; num <= 9; num++) {
                        const numStr = num.toString();
                        if (isValid(board, r, c, numStr)) {
                            board[r][c] = numStr;
                            if (solve()) return true;
                            board[r][c] = '.';  // Backtrack
                        }
                    }
                    return false;  // If no number is valid, backtrack
                }
            }
        }
        return true;  // All cells are filled
    };

    solve();
};

// Example usage:
const board = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
];

solveSudoku(board);
console.log(board);  // Output: Solved Sudoku board
