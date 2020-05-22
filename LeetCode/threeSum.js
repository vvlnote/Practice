/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let ans = [];
    nums = nums.sort((a, b) => a - b);
    // console.log(nums);
    for (let i = 0; i < nums.length -2; i++) {
        if (nums[i] === nums[i-1]) continue;
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if (sum === 0) {
                ans.push([nums[i], nums[j], nums[k]]);
                while (nums[j] === nums[j+1]) j += 1;
                while (nums[k] === nums[k-1]) k -= 1;
                j += 1;
                k -= 1;
            } else if (sum < 0) {
                j += 1;
            } else {
                k -= 1;
            }
        }
    }
    return ans;
};