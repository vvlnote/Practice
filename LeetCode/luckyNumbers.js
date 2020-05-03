var luckyNumbers  = function(matrix) {
    let minArr = [];
    let maxArr = [];
    for (let i = 0; i < matrix.length; i ++) {
        minArr.push(Math.min(...matrix[i]));
    }
    let max = Number.MIN_VALUE;
    for (let i = 0; i < matrix[0].length; i ++) {
        for (let j = 0; j < matrix.length; j ++) {            
            max = Math.max(max, matrix[j][i]);
        }
        maxArr.push(max);
        max = Number.MIN_VALUE;
    }
    let ans = [];
    for (let i = 0; i < minArr.length; i ++){
        if (maxArr.includes(minArr[i])) {
            ans.push(minArr[i]);
        }
    }
    return ans;
};