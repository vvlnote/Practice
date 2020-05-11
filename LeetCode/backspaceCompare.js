/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    function getFinalStr(arr) {
        let stack = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === "#") {
                stack.pop();
            } else {
                stack.push(arr[i]);
            }
        }
        return stack.join();
    }
    
    let s = getFinalStr(S);
    let t = getFinalStr(T);
    return s === t ? true : false;

};