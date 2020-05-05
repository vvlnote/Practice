var isAnagram = function(s, t) {

    if (s.length != t.length) return false;
    let sObj = {};
    let size = 0;
    for (let i = 0; i < s.length; i ++) {
        if (sObj[s[i]] === undefined) {
            sObj[s[i]] = 1;
            size += 1;
        } else {
            sObj[s[i]] += 1;
        }
    }
    for (let i = 0; i < t.length; i++) {
     if (sObj[t[i]] === undefined) return false;
     sObj[t[i]] -= 1;
     if (sObj[t[i]] === 0) {
      delete sObj[t[i]];
      size -= 1;
     }
    }
    if (size === 0) return true;
    return true;
};