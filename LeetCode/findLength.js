/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
    let maxLength = 0;
    let ansArr = new Array(A.length).fill(0).map(() => new Array(B.length).fill(0));
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B.length; j++) {
            if (A[i] === B[j]) {
                if (i - 1 >= 0 && j-1 >=0 ) {
                    ansArr[i][j] = ansArr[i-1][j-1] + 1;
                } else {
                    ansArr[i][j] = 1;
                }
            }
        }
        maxLength = Math.max(maxLength, ...ansArr[i]);
    }
    return maxLength;    
};