var maxIncreaseKeepingSkyline = function(grid) {
    let rowHighest = [];
    let columnHighest = [];
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (rowHighest[i] === undefined) {
                rowHighest[i] = grid[i][j];
            }else {
                if (rowHighest[i] < grid[i][j]) {
                    rowHighest[i] = grid[i][j];
                }
            }
            if (columnHighest[j] === undefined) {
                columnHighest[j] = grid[i][j];
            } else {
                if (columnHighest[j] < grid[i][j]) {
                    columnHighest[j] = grid[i][j];
                }
            }
        }
    }
    let sum = 0;
    for (i = 0; i < grid.length; i++) {
        for (j = 0; j < grid[i].length; j++) {
            rowHighest[i] <= columnHighest[j] ? sum += (rowHighest[i] - grid[i][j]) : sum += (columnHighest[j] - grid[i][j]);
        }
    }
    return sum;
};