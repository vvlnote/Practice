/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i1 = 0;
    let i2 = 0;
    let l1 = m;
    
    function insert(num, arr, index, length) {
        for (let i = length - 1; i >= index; i--) {
            arr[i] = arr[i-1];
        }
        arr[index] = num;
    }
    
    while (i2 < n && i1 < l1) {
        if (nums1[i1] < nums2[i2]) {
            i1 += 1;
        } else {
            l1 += 1;
            insert(nums2[i2], nums1, i1, l1);
            i2 += 1;
            i1 += 1;
        }
    }
    if (i2 < n) {
        for (let i = i2; i < n; i ++) {
            nums1[i1] = nums2[i];
            i1 += 1;
        }
    }
};