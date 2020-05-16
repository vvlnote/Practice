/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// more compact method. without reversing the strings. 
// 1. make both string are same size.
// 2. sum = a + b + carry 
// 3. the result of sum % 2 will be the integer of i position in the ans 
// 4. the result of Math.floor (sum/2) will be assigned to carry

var addBinary = function(a, b) {
 let temp = a.length - b.length;
 if (temp > 0) {
     b = b.padStart(a.length, "0");
 }
 if (temp < 0) {
     a = a.padStart(b.length, '0');
 }
 let ans = Array(a.length).fill('0');
 let carry = 0;
 for (let i = a.length - 1; i >= 0; i--) {
     let sum = parseInt(a[i]) + parseInt(b[i]) + carry; 
     ans[i] = sum%2;
     carry = Math.floor(sum/2);
 }
 if (carry === 1) {
     ans.unshift('1');
 }
 return ans.join('');
}
 /* first try
var addBinary = function(a, b) {
    let aArr = a.split('').reverse();
    let bArr = b.split('').reverse();
    let length = a.length > b.length ? a.length : b.length;
    let ans = [];
    let carry = 0;
    let num = 0;
    for (let i = 0; i < length; i++) {
        if ((aArr[i] === null) || (aArr[i] === undefined)){
            if (carry) {
                num = parseInt(bArr[i]) + carry;
                if (num === 2) {
                    ans[i] = '0';
                    carry = 1;
                } else {
                    if (num === 1 || num === 0) {
                        ans[i] = num.toString();
                        carry = 0;
                    }
                }
            } else {
                ans[i] = bArr[i];
            }     
        } 
        if((bArr[i] === null) || (bArr[i] === undefined)) {
            if (carry) {
                num = parseInt(aArr[i]) + carry;
                if (num === 2) {
                    ans[i] = '0';
                    carry = 1;
                } else {
                    if (num === 1 || num === 0) {
                        ans[i] = num.toString();
                        carry = 0;
                    }
                }
            } else {
                ans[i] = aArr[i];
            }             
        }
        if ((bArr[i] !== null) && (aArr[i] !== null)){
            num = parseInt(bArr[i]) + parseInt(aArr[i]) + carry;
            if (num === 3) {
                ans[i] = '1';
                carry = 1;
            }
            if (num === 2) {
                ans[i] = '0';
                carry = 1;
            }
            if ((num === 1) || (num === 0)) {
                ans[i] = num.toString();
                carry = 0;
            }
                
        }
    }
    if (carry) {
        ans[length] = carry.toString();
    }
    return ans.reverse().join('');
};
*/