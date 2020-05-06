/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
//more structured
/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
 if (num <= 0) return false;
 while (num > 1) {
     if (num%2 === 0) {
         num = num /2;
     } else if (num % 3 === 0) {
         num = num / 3;
     } else if (num % 5 === 0) {
         num = num /5;
     } else {
         return false;
     }
 }
 return true;

    // if (num < 0) return false;
    // while (num % 2 === 0 && num > 1) {
    //     num = num / 2;
    // }
    
    // while (num % 3 === 0 && num > 1) {
    //     num = num /3;
    // }
    // while (num % 5 === 0 && num > 1) {
    //     num = num / 5;
    // }
    
    // if (num === 1) return true;
    // return false;
};