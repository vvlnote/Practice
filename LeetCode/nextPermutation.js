var nextPermutation = function(nums) {
    
    
    function swap(arr, index1, index2) {
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }
    
    function reverse(arr, start, end) {
        // console.log(`inside reverse`);
        while(end > start) {
            // console.log(`start = ${start}, end = ${end}`);
            swap(arr, start, end);
            start += 1;
            end -= 1;
        }
    }
    //find the point where the value is not increasing 
    let pIndex = 0;
    let i = nums.length - 1;
    while (i > 0) {
        if (nums[i] > nums[i-1]) {
            pIndex = i-1; 
            break;
        } else {
            i -= 1;
        }
    }

    
    if (i === 0) {
        reverse(nums, 0, nums.length - 1);
        return;
    }
    //from the end of array to find the first number it is bigger than nums[pIndex]
    //find the number, and swap it with the value of nums[pIndex]
    for (i = nums.length - 1; i > pIndex; i--) {
        // console.log(`pIndex = ${pIndex}, i = ${i}`);
        if (nums[pIndex] < nums[i]) {
            swap(nums, pIndex, i);
            break;
        }
    }
    //since the numbers after pIndex are decreasing, so need to reverse to make the smallest number
    //at the place after the pIndex.
    reverse(nums, pIndex + 1, nums.length - 1);
    
};