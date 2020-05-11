var removeDuplicates = function(nums) {
    let target = nums[0];
    let count = 1;
    let i = 1;
    while (i < nums.length){
        if (nums[i] === target) {
            count += 1;
        } else {
            target = nums[i];
            count = 1;
        }
        if (count > 2) {
            nums.splice(i, 1);
        } else {
            i += 1;
        }
    }
    return nums.length;
};