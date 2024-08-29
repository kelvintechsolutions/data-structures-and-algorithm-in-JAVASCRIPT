
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    // Sort the array to apply the two-pointer technique
    nums.sort((a, b) => a - b);
    
    // Initialize the closest sum with a large number
    let closestSum = Infinity;
    
    // Iterate through the array with the first pointer
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        
        // Apply the two-pointer technique
        while (left < right) {
            const currentSum = nums[i] + nums[left] + nums[right];
            
            // If currentSum is closer to the target, update closestSum
            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum;
            }
            
            // Move pointers based on the comparison of currentSum with target
            if (currentSum < target) {
                left++;
            } else if (currentSum > target) {
                right--;
            } else {
                // If currentSum == target, return currentSum as it's the closest possible
                return currentSum;
            }
        }
    }
    
    // Return the closest sum found
    return closestSum;
};

// Example usage:
console.log(threeSumClosest([-1, 2, 1, -4], 1)); // Output: 2
console.log(threeSumClosest([0, 0, 0], 1));      // Output: 0
