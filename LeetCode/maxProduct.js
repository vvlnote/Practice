/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
 //this is O(n^2)
    if (nums.length === 1) return nums[0];

    let global_max = nums[0];
    for (let i = 0; i < nums.length; i++) {
        let val = nums[i];
        if (global_max < val) {
            global_max = val;
        }
        let temp = 1;
        for (let j = i + 1; j < nums.length; j++) {
           val = val*nums[j];
            // console.log(`val = ${val}, i = ${i}, j = ${j}`);
            if (global_max < val) {
                global_max = val;
            }
        }
    }
    if (global_max < nums[nums.length-1]) {
        global_max = nums[nums.length-1];
    }
    return global_max;
};