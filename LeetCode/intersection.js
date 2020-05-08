/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    if (!nums1 || !nums2 || !nums1.length || !nums2.length) return [];
    let obj = {};
    for (let i = 0; i < nums1.length; i++) {
        if (obj[nums1[i]] === undefined) {
            obj[nums1[i]] = 1;
        }
    }
    for (let i = 0; i < nums2.length; i++) {
        if (obj[nums2[i]] !== undefined) {
            obj[nums2[i]] += 1;
        }
    }
    let ans = [];
    for (let [key, val] of Object.entries(obj)) {
        if (val > 1) {
            ans.push(key);
        }
    }
    return ans;
    //sort the nums1 and nums2
    // if(!nums1 || !nums2 || !nums1.length || !nums2.length ) return [];
    // nums1.sort((a,b) => a-b);
    // nums2.sort((a,b) => a-b);
    // let i1 = 0;
    // let i2 = 0;
    // let ansSet = new Set();
    // while(i1 < nums1.length && i2 < nums2.length) {
    //     if (nums1[i1] === nums2[i2]) {
    //         ansSet.add(nums1[i1]);
    //         i1 += 1;
    //         i2 += 1;
    //     } else if (nums1[i1] > nums2[i2]) {
    //         i2 += 1;
    //     } else if (nums1[i1] < nums2[i2]) {
    //         i1 += 1;
    //     }
    // }
    // return [...ansSet];
    
//     if ((nums1 === null) || (nums2 === null) || (nums1.length === 0) || (nums2.length === 0)) {
//         return [];
//     }
//     let numsSet = new Set(nums1);

//     let intersectionIndex = 0;
//     for (let i = 0; i < nums2.length; i++) {
//         if (numsSet.has(nums2[i])) {
//             nums2[intersectionIndex] = nums2[i];
//             intersectionIndex += 1;
//         }
//     }
//     ansSet = new Set(nums2.slice(0, intersectionIndex));
//     return Array.from(ansSet);
    
};