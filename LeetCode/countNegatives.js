var countNegatives = function(grid) {
    if (grid.length == 0 || grid[0].length == 0) {
        return 0;
    }
    let rlen = grid.length;
    let clen = grid[0].length;
    let count = 0;
    for (let r = rlen - 1; r >= 0; r--) {
        for (let c = clen-1; c >= 0; c--) {
            if (grid[r][c] < 0) {
                count += 1;
            } else {
                break;
            }
        }
    }
    return count;
};