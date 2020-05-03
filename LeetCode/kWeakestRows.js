var kWeakestRows = function(mat, k) {
    let sArr = [];
    for (let i = 0; i < mat.length ; i++) {
        sArr[i] = [...mat[i]].reduce((sum, val) => sum + val);
    }
    let temp = [...sArr];
    temp.sort((a,b) => a - b);
    let ans = [];
    for (let i = 0; i< k; i ++) {
        let index = sArr.indexOf(temp[i]);
        ans.push(index);
        sArr[index] = "X";
    }
    return ans;
};