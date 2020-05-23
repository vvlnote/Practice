/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
 let minDiff = Number.MAX_VALUE;
 let minNum = 0;
 nums = nums.sort((a, b) => a - b);
 for (let i = 0; i < nums.length -2; i ++) {
     let j = i + 1;
     let k = nums.length -1;
     while (j < k) {
         let sum = nums[i] + nums[j] + nums[k];
         if (minDiff > Math.abs(sum - target)) {
             minDiff = Math.abs(sum- target);
             minNum = sum;
         }
         if (sum < target) {
             j += 1;
         } else if (sum > target) {
             k -= 1;
         } else {
             return sum;
         }
     }
 }
 return minNum;
};