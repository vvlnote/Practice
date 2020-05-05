var isAnagram = function(s, t) {
    let mapObj = {};
    if (s.length != t.length) return false;
    let sObj = {};
    let tObj = {};
    for (let i = 0; i < s.length; i ++) {
        if (sObj[s[i]] === undefined) {
            sObj[s[i]] = 1;
        } else {
            sObj[s[i]] += 1;
        }
        // console.log(sObj);
        if (tObj[t[i]] === undefined) {
            tObj[t[i]] = 1;
        } else {
            tObj[t[i]] += 1;
        }
        // console.log(tObj);
    }
    for (let [key, value] of Object.entries(sObj)) {
        if (tObj[key] !== value) return false;
    }
    return true;
};