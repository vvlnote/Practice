/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
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