/* Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

0 <= a, b, c, d < n
a, b, c, and d are distinct.
nums[a] + nums[b] + nums[c] + nums[d] == target
You may return the answer in any order.

 

Example 1:

Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
Example 2:

Input: nums = [2,2,2,2,2], target = 8
Output: [[2,2,2,2]]
 

Constraints:

1 <= nums.length <= 200
-109 <= nums[i] <= 109
-109 <= target <= 109 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    const quadruplets = [];
    
    // Sort the array
    nums.sort((a, b) => a - b);
    
    // Iterate over the array with two loops to fix the first two elements
    for (let i = 0; i < nums.length - 3; i++) {
        // Skip duplicate elements for the first element
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        
        for (let j = i + 1; j < nums.length - 2; j++) {
            // Skip duplicate elements for the second element
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;
            
            let left = j + 1;
            let right = nums.length - 1;
            
            // Use two pointers to find the remaining two elements
            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];
                
                if (sum === target) {
                    quadruplets.push([nums[i], nums[j], nums[left], nums[right]]);
                    
                    // Move the left pointer and skip duplicates
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    left++;
                    
                    // Move the right pointer and skip duplicates
                    while (left < right && nums[right] === nums[right - 1]) right--;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }
    
    return quadruplets;
};

// Example usage:
console.log(fourSum([1, 0, -1, 0, -2, 2], 0)); // Output: [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]
console.log(fourSum([2, 2, 2, 2, 2], 8));      // Output: [[2, 2, 2, 2]]
