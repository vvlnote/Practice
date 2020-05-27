// var minWindow = function(s, t) {
//     let strObj = new Object();
//     for (let i = 0; i < t.length; i++) {
//         if(strObj[t[i]] === undefined) {
//             strObj[t[i]] = 1;
//         } else {
//             strObj[t[i]] += 1;
//         }
//     }
//     let strObjSize = Object.keys(strObj).length;
//     if (strObjSize === 0) return "";
//     if (s.length < t.length) return '';
//     let ans = "";
//     let right = 0; 
//     let left = 0;
//     let form = 0;
//     let tempObj = new Object();
//     while(right < s.length) {
//         let c = s[right];
//         if (tempObj[c] !== undefined) {
//             tempObj[c] += 1;
//         } else {
//             tempObj[c] = 1;
//         }
//         if (strObj[c] != undefined && strObj[c] === tempObj[c]) {
//             form += 1;
//         }
//          while(left <= right && form === strObjSize) {
//             if (ans.length !== 0 && ans.length > right-left) {
//                 ans = s.slice(left, right+1);
//             } else if (ans.length === 0) {
//                 ans = s.slice(left, right + 1);
//             }
//             c = s[left];
//             tempObj[c] -= 1;
//             if (strObj[c] !== undefined && tempObj[c] < strObj[c]) {
//                 form -= 1;
//             }
//             left += 1;
            
//         }
//         right += 1; 
//     }
//     return ans;
// };