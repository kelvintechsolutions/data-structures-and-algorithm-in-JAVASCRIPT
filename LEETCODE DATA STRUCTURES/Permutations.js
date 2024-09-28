/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];
    
    // Helper function for backtracking
    const backtrack = (start) => {
        // If the permutation is complete, add it to the result
        if (start === nums.length) {
            result.push([...nums]);  // Make a copy of the current permutation
            return;
        }
        
        // Try each element in the nums array for the current position
        for (let i = start; i < nums.length; i++) {
            // Swap to fix one element at the current position
            [nums[start], nums[i]] = [nums[i], nums[start]];
            
            // Recurse for the next position
            backtrack(start + 1);
            
            // Backtrack: undo the swap to restore the array for the next iteration
            [nums[start], nums[i]] = [nums[i], nums[start]];
        }
    };
    
    // Start the backtracking from index 0
    backtrack(0);
    
    return result;
};
