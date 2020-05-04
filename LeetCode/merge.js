/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length === 0) return [];
    let ans = [];
    intervals.sort((a,b) => a[0] - b[0]);
    ans.push(intervals[0]);
    let index = 0;
    for (let i = 1; i < intervals.length; i ++) {
        //do not have overlap
        if (ans[index][1] < intervals[i][0]) {
            ans.push(intervals[i]); 
            index += 1;
        } else if (ans[index][0] <= intervals[i][0] && 
            ans[index][1] >= intervals[i][1]) {
                //total overlap      
        } else if (ans[index][1] >= intervals[i][0]) {
            //partial overlap 
            ans[index][1] = intervals[i][1];
        }            
    }
    return ans;
};