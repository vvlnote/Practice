/**
 * @param {string} s
 * @return {number}
 */

var firstUniqChar = function(s) {
    let charMap = new Object();
    for (let i = 0; i < s.length; i ++) {
        if (charMap[s[i]] === undefined){
            charMap[s[i]] = 1;
        } else {
            charMap[s[i]] += 1;
        }
    }
    for (let i = 0; i < s.length; i ++) {
        if (charMap[s[i]] === 1){
            return i;
        }
    }
    return -1;
}
        
    
//     const charMap = new Map();
//     for (let i = 0; i < s.length; i ++) {
//         let aChar = s.charAt(i);
//         if (charMap.has(aChar)) {
//             //this char is duplicated, so set the index to -1 to indicate this char is duplicated, since all the index should be either 0 or bigger than 0
//             charMap.set(aChar, -1);
//         } else {
//             charMap.set(aChar, i);
//         }
//     }
//     let minIndex = Number.MAX_VALUE;
//     charMap.forEach((value, key) => {
//         if ((value > -1) && (value < minIndex)) {
//             minIndex = value;
//         }
//     })
//     if (minIndex === Number.MAX_VALUE) { return -1;}
//     return minIndex;
    
// };



// var firstUniqChar = function(s) {
//     for (let i = 0; i < s.length; i++) {
//         let aChar = s.charAt(i);

//         let firstIndex = s.indexOf(aChar);
//         let lastIndex = s.lastIndexOf(aChar);

        
//         if (firstIndex === lastIndex) {
//             return firstIndex;
//         }
//     }
//     return -1;
 // };