/* You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

 

Example 1:


Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1
 

Constraints:

n == height.length
2 <= n <= 105
0 <= height[i] <= 104 */
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;                      // Initialize the left pointer
    let right = height.length - 1;    // Initialize the right pointer
    let maxArea = 0;                  // Variable to store the maximum area

    // Continue until the two pointers meet
    while (left < right) {
        // Calculate the width and height of the container
        let width = right - left;
        let minHeight = Math.min(height[left], height[right]);

        // Calculate the area with the current pointers
        let area = width * minHeight;

        // Update the maximum area if the current area is larger
        maxArea = Math.max(maxArea, area);

        // Move the pointer pointing to the shorter line
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
};

// Example usage
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Output: 49
console.log(maxArea([1,1]));                // Output: 1
