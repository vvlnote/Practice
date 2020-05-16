/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (!matrix || !matrix.length || !matrix[0].length ) return false;
    for (let i = 0; i < matrix.length; i ++) {
        if (matrix[i][0] <= target && matrix[i][matrix[i].length -1] >= target) {
            if (binSearch(matrix[i], 0, matrix[i].length -1, target)) return true;
        }
    }
    return false;
    
    function binSearch(arr, sIndex, eIndex, target) {
        // console.log(`sIndex = ${sIndex}, eIndex = ${eIndex}, arr = ${arr[sIndex]}`);
        if (sIndex > eIndex) return false;
        if (sIndex === eIndex && arr[sIndex] === target) return true;
        if (sIndex === eIndex && arr[sIndex] != target) return false;
        let mid = Math.floor((sIndex + eIndex)/2);
        if (arr[mid] === target) return true;
        if (arr[mid] < target) {
           return binSearch(arr, mid+1, eIndex, target);
        }
        if (arr[mid] > target) {
            return binSearch(arr, sIndex, mid-1, target);
        }
    }
};