/*  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:
 
Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists. */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Create an object to store the index of each number
    let numToIndex = {};

    // Iterate over the array
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]; // Calculate the complement needed to reach the target

        // Check if the complement is already in the object
        if (numToIndex.hasOwnProperty(complement)) {
            // If found, return the indices of the complement and the current number
            return [numToIndex[complement], i];
        }

        // Store the index of the current number in the object
        numToIndex[nums[i]] = i;
    }

    // Return an empty array if no solution is found (though the problem guarantees one solution)
   
   
    return [];
};
console.log(twoSum([2,7,11,15],9));
console.log(twoSum([3,2,4],6));
console.log(twoSum([3,3],6));
