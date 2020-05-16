// var searchMatrix = function(matrix, target) {
//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix[0].length; j++) {
//             if (matrix[i][j] === target) return true;
//         }
//     }
//     return false;
// };

var searchMatrix = function(matrix, target) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) return false;
    let i = 0; 
    let j = 0;
    let row = matrix.length;
    let col = matrix[0].length;
    
    while (true) {
        // console.log(`i = ${i}, j = ${j}, matrix = ${matrix[i][j]}`);
        if (matrix[i][j] === target) return true;
        if (matrix[i][j] === "*") {
            if (i + 1 < row && matrix[i+1][j] !== '*') {
                i+=1;
            } else if (j + 1 < col && matrix[i][j+1] !== '*') {
                j += 1;
            } else if (i - 1 >= 0 && matrix[i-1][j] !== '*') {
                i -= 1;
            } else if (j-1 >=0 && matrix[i][j] !== '*') {
                j -= 1;
            } else {
                return false;
            }
                
        }
        if (matrix[i][j] < target) {
            if (j + 1 === col && i + 1 === row) {
                return false;
            }
            matrix[i][j] = '*';
            if (j + 1 === col) {
                i+= 1;
            } else if (i + 1 === row) {
                j += 1;
            } else {
                j += 1;
            }
        } else if (matrix[i][j] > target) {
            if (i - 1 < 0 && j-1 < 0) {
                return false;
            } 
            matrix[i][j] = '*';
            if (i - 1 < 0) {
                j -= 1;
            }else if (j - 1 < 0) {
                return false;
            } else {
                j -= 1;
            }
        }
    }
    
}