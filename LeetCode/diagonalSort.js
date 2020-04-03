var diagonalSort = function(mat) {
    let i = 0;
    let j = 0;
    let diagonalMap = new Map();
    
    for (i = 0; i < mat.length; i++) {
        for (j = 0; j < mat[i].length; j++){
            if (diagonalMap.has(i-j)) {
                let temp = diagonalMap.get((i-j));
                temp.push(mat[i][j]);
                diagonalMap.set((i-j), temp);
            } else {
                let temp = [];
                temp.push(mat[i][j]);
                diagonalMap.set((i-j), temp);
            }
        }
    }
    diagonalMap.forEach((value, key) => {
        if (value.length > 1){
            value.sort((a, b) => a - b);
        }
    })
    for (i = 0; i < mat.length; i++) {
        for (j = 0; j < mat[i].length; j++){
            mat[i][j] = diagonalMap.get(i-j).shift();
        }
    }
    return mat;
};