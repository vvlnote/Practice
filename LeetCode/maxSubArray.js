/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    //use DP, Kadane's Algorithm
    //formula:
    //local_max = Math.max(nums[i], local_max+num[i])
    //reference: https://medium.com/@rsinghal757/kadanes-algorithm-dynamic-programming-how-and-why-does-it-work-3fd8849ed73d
    let max_so_far = nums[0];
    let max_ending_here = nums[0];
    
    for (let i = 1; i < nums.length; i ++) {
        max_ending_here = max_ending_here + nums[i];
        max_ending_here = Math.max(max_ending_here, nums[i]);
        max_so_far = Math.max(max_so_far, max_ending_here);
    }
    return max_so_far;
};