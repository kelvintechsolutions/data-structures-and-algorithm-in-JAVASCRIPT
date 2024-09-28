/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let jumps = 0;       // Count of jumps made
    let current_end = 0; // The farthest we can go with the current number of jumps
    let farthest = 0;    // The farthest point we can reach with one more jump
    
    for (let i = 0; i < nums.length - 1; i++) {
        farthest = Math.max(farthest, i + nums[i]);  // Update the farthest point we can reach
        
        // If we reach the end of the range for the current jump
        if (i == current_end) {
            jumps++;             // We need to make another jump
            current_end = farthest; // Update the end of the next jump range
        }
    }
    
    return jumps;
};
