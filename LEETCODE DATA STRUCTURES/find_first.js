/* Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]
 

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums is a non-decreasing array.
-109 <= target <= 109 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let searchRange = function(nums, target) {
    // Function to find the first occurrence of the target
    const findFirst = (nums, target) => {
        let left = 0, right = nums.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                if (mid === 0 || nums[mid - 1] !== target) {
                    return mid;
                } else {
                    right = mid - 1;
                }
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1;
    };

    // Function to find the last occurrence of the target
    const findLast = (nums, target) => {
        let left = 0, right = nums.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                if (mid === nums.length - 1 || nums[mid + 1] !== target) {
                    return mid;
                } else {
                    left = mid + 1;
                }
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1;
    };

    // Find the first and last occurrence of the target
    const first = findFirst(nums, target);
    if (first === -1) {
        return [-1, -1];
    }
    const last = findLast(nums, target);

    return [first, last];
};

// Example usage:
console.log(searchRange([5,7,7,8,8,10], 8)); // Output: [3,4]
console.log(searchRange([5,7,7,8,8,10], 6)); // Output: [-1,-1]
console.log(searchRange([], 0));             // Output: [-1,-1]
