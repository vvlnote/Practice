var smallerNumbersThanCurrent = function(nums) {
    let ans = [];
    let sortedNums = [...nums];
    sortedNums = sortedNums.sort((a,b) => a-b);
    console.log(sortedNums);
    for (let i = 0; i < nums.length; i++){
        let index = sortedNums.indexOf(nums[i]);
        ans.push(index);
    }
    return ans;
};