/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const result = [];
    nums.sort((a, b) => a - b);  // Sort the input to handle duplicates easily
    const used = Array(nums.length).fill(false);  // Track used elements

    // Helper function for backtracking
    const backtrack = (currentPermutation) => {
        if (currentPermutation.length === nums.length) {
            result.push([...currentPermutation]);  // Add the current permutation to the result
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            // Skip if the number has already been used or if it's a duplicate and the previous duplicate hasn't been used
            if (used[i] || (i > 0 && nums[i] === nums[i - 1] && !used[i - 1])) {
                continue;
            }

            // Mark the number as used
            used[i] = true;
            currentPermutation.push(nums[i]);

            // Recurse to build the rest of the permutation
            backtrack(currentPermutation);

            // Backtrack: unmark the number and remove it from the current permutation
            used[i] = false;
            currentPermutation.pop();
        }
    };

    // Start the backtracking process
    backtrack([]);

    return result;
};
