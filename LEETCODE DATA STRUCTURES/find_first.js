/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    // Helper function to find the first occurrence of the target
    function findFirst(nums, target) {
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
    }

    // Helper function to find the last occurrence of the target
    function findLast(nums, target) {
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
    }

    let first = findFirst(nums, target);
    if (first === -1) {
        return [-1, -1];
    }

    let last = findLast(nums, target);
    return [first, last];
};

// Example usage:
console.log(searchRange([5,7,7,8,8,10], 8)); // Output: [3,4]
console.log(searchRange([5,7,7,8,8,10], 6)); // Output: [-1,-1]
console.log(searchRange([], 0));             // Output: [-1,-1]
