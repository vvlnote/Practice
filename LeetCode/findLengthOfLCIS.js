/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    if (!nums) return 0;
    if (nums.length < 2) return nums.length;
    let count = 1;
    let maxCount = 0;
    for (let i = 0; i < nums.length - 1; i++) {

        if (nums[i] < nums[i+1]) {
            count += 1;
        } else {
            if (count > maxCount) {
                maxCount = count;                
            }
            count = 1;
        }
    }
    if (count > maxCount) {
        maxCount = count;
    }
    return maxCount;
}