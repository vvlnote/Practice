var twoSum = function(nums, target) {
    const numsHashMap = {};
    for (let i = 0; i < nums.length; i++) {
        const currentValue = nums[i];
        const neededValue = target - currentValue;
        const neededValueIndex = numsHashMap[neededValue];
        if (neededValueIndex != null){
            return[i, neededValueIndex];
        } else {
            numsHashMap[currentValue] = i;
        }
    }
    
};