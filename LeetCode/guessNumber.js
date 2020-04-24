/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let endNum = n;
    let startNum = 1;
    let gNum = Math.floor((endNum+startNum)/2);

    let ans = guess(gNum);
    while (endNum >= startNum) {
        let ans = guess(gNum);
        if (ans === 0) {
            return gNum;
        }
        if (ans === -1) {
            endNum = gNum - 1;
        }
        if (ans === 1) {
            startNum = gNum + 1;
        }
        gNum = Math.floor((endNum + startNum)/2);
    }
   
};