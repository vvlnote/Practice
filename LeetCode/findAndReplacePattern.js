var findAndReplacePattern = function(words, pattern) {
    let wordMap = new Map();
    let patternSet = new Set(pattern);
    let ans = [];
    for (let i = 0; i < words.length; i ++) {
        let j = 0;
        let temp = new Set(words[i]);
        if (temp.size === patternSet.size) {
        for (j = 0; j < words[i].length; j ++) {
            let val = wordMap.get(pattern[j]);
            if (val === undefined) {
                val = words[i][j];
                wordMap.set(pattern[j], val);
            } else {
                if (val != words[i][j]) {
                    break;
                }
            }
        }
        if (j === words[i].length) {
            ans.push(words[i]);
        }
        wordMap = new Map();    
        }
    }
    return ans;
};