/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    let i = 0;
    // function isMontone(arr, startingIndex, increase) {
    //     for (let i = startingIndex; i < arr.length - 1; i ++) {
    //         // console.log(`A[i] = ${A[i]}, A[i+1] = ${A[i+1]}`);
    //         if (increase) {
    //             if (A[i] > A[i+1]) return false;
    //         }
    //         if (!increase) {
    //             if (A[i] < A[i+1]) return false;
    //         }
    //     }
    //     return true;
    // }
    

 function isMontone(arr, startingIndex, increase) {
     if (increase) {
         for (let i = startingIndex; i < arr.length -1; i ++) {
             if (A[i] > A[i+1]) return false;
         }
         return true;
     }
     if (!increase) {
         for (let i = startingIndex; i < arr.length -1; i ++) {
             if (A[i] < A[i+1]) return false;
         }
         return true;            
     }
 };
    while(i < A.length - 1) {
        if (A[i] < A[i+1]) {
            return isMontone(A, i + 1, true);
        } else if (A[i] > A[i+1]) {
            return isMontone(A, i+1, false);
        } else {
            i+= 1;
        }
    }
    return true;
};