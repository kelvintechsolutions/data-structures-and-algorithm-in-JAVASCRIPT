/* Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.

 

Example 1:

Input: candidates = [10,1,2,7,6,1,5], target = 8
Output: 
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
Example 2:

Input: candidates = [2,5,2,1,2], target = 5
Output: 
[
[1,2,2],
[5]
]
 

Constraints:

1 <= candidates.length <= 100
1 <= candidates[i] <= 50
1 <= target <= 30 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const result = [];
    candidates.sort((a, b) => a - b); // Sort to help skip duplicates
    
    function backtrack(start, path, remaining) {
        if (remaining === 0) {
            result.push([...path]); // Found a valid combination
            return;
        }
        if (remaining < 0) {
            return; // Exceeded the target, no need to continue
        }
        
        for (let i = start; i < candidates.length; i++) {
            // Skip duplicates
            if (i > start && candidates[i] === candidates[i - 1]) {
                continue;
            }
            path.push(candidates[i]);
            backtrack(i + 1, path, remaining - candidates[i]); // Move to the next number
            path.pop(); // Remove the last number and backtrack
        }
    }
    
    backtrack(0, [], target);
    return result;
};

// Example usage:
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
// Output: [[1,1,6],[1,2,5],[1,7],[2,6]]
console.log(combinationSum2([2, 5, 2, 1, 2], 5));
// Output: [[1,2,2],[5]]
