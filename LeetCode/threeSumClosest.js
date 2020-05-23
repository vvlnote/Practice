/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let diffArr = [];
    let minDiff = Number.MAX_VALUE;
    let minNum = 0;
    for (let i = 0; i < nums.length -2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                let sum = nums[i] + nums[j] + nums[k];
                // console.log(sum);
                if (minDiff > Math.abs(target - sum)) {
                    minDiff = Math.abs(target-sum);
                    minNum = sum;
                }
            }
        }
    }
    return minNum;
};