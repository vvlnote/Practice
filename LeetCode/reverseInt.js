/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let xArr = x.toString().split('');
    let start = 0;
    if (xArr[0] === "-") {
        start = 1;
    }
    let end = xArr.length-1;
    while (start < end) {
        let temp = xArr[start];
        xArr[start] = xArr[end];
        xArr[end] = temp;
        start += 1;
        end -= 1;
    }
    // console.log(xArr);
    let xStr = xArr.join("");
    // console.log(xStr);
    let ans = parseInt(xStr);
    if (ans > 2**31 -1 || ans < -(2**31)){
              return 0;  
    }
    return ans;
};