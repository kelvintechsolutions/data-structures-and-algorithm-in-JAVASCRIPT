/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let result = [];
    if (matrix.length === 0) return result;

    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        // Traverse from left to right along the top row
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++;  // Move the top boundary down

        // Traverse from top to bottom along the right column
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;  // Move the right boundary left

        if (top <= bottom) {
            // Traverse from right to left along the bottom row
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--;  // Move the bottom boundary up
        }

        if (left <= right) {
            // Traverse from bottom to top along the left column
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;  // Move the left boundary right
        }
    }

    return result;
};
