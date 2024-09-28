/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // Initialize the variables to store current and max subarray sum
    let currentSum = nums[0];  // The sum of the current subarray
    let maxSum = nums[0];      // The maximum sum found so far
    
    // Loop through the array starting from the second element
    for (let i = 1; i < nums.length; i++) {
        // Update currentSum: start a new subarray or continue the existing one
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        
        // Update maxSum if the current subarray has a larger sum
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
};
