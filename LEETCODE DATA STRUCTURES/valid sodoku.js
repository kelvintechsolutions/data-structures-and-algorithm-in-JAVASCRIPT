/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // Create sets to track seen numbers in each row, column, and 3x3 sub-box
    const rows = Array.from({ length: 9 }, () => new Set());
    const cols = Array.from({ length: 9 }, () => new Set());
    const boxes = Array.from({ length: 9 }, () => new Set());
    
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            const num = board[r][c];
            if (num === '.') continue; // Skip empty cells

            // Check if the number is already in the current row
            if (rows[r].has(num)) return false;
            rows[r].add(num);
            
            // Check if the number is already in the current column
            if (cols[c].has(num)) return false;
            cols[c].add(num);
            
            // Check if the number is already in the current 3x3 sub-box
            const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);
            if (boxes[boxIndex].has(num)) return false;
            boxes[boxIndex].add(num);
        }
    }
    
    return true;
};

// Example usage:
const board1 = [
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

const board2 = [
    ["8","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
];

console.log(isValidSudoku(board1)); // Output: true
console.log(isValidSudoku(board2)); // Output: false
