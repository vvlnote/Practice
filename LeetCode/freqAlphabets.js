var freqAlphabets = function(s) {
    let charArr = [0,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    
    if (s == null || s.lenght == 0) {
        return '';
    }
    let i = 0;
    let ans = '';
    let index = 0;
    while (i < s.length) {
        if (s[i+2] == '#') {
            index = parseInt((s[i]+s[i+1]), 10);
            ans += charArr[index];
            i += 3;
        }else {
            index = parseInt(s[i], 10);
            ans += charArr[index];
            i += 1;
        }
    }
    return ans;
};