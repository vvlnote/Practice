/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    //use array.splice to remove the unwanted element
    intervals.sort((a,b) => (a[0] - b[0]));
    let i = 0; 
    while (i < intervals.length -1) {
        if (intervals[i][1] >= intervals[i+1][0]) {
            intervals[i][1] = Math.max(intervals[i][1], intervals[i+1][1]);
            
            intervals.splice(i+1, 1);
        } else {
            i+=1;
        }
    }
    return intervals;
    // if (intervals.length === 0) return [];
    // let ans = [];
    // intervals.sort((a,b) => a[0] - b[0]);
    // ans.push(intervals[0]);
    // let index = 0;
    // for (let i = 1; i < intervals.length; i ++) {
    //     //do not have overlap
    //     if (ans[index][1] < intervals[i][0]) {
    //         ans.push(intervals[i]); 
    //         index += 1;
    //     } else if (ans[index][0] <= intervals[i][0] && 
    //         ans[index][1] >= intervals[i][1]) {
    //             //total overlap      
    //     } else if (ans[index][1] >= intervals[i][0]) {
    //         //partial overlap 
    //         ans[index][1] = intervals[i][1];
    //     }            
    // }
    // return ans;
};