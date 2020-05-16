/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    
    function hashMap(str, start, end) {
        let obj = new Object();
        for (let i = start; i <= end; i++) {
            if (obj[str[i]] === undefined) {
                obj[str[i]] = 1;
            } else {
                obj[str[i]] += 1;
            }            
        }
        return obj;
    }
    
    function isEqual(obj1, obj2) {
        let obj1Props = Object.getOwnPropertyNames(obj1);
        let obj2Props = Object.getOwnPropertyNames(obj2);
        if (obj1Props.length !== obj2Props.length) return false;
        
        for (let i = 0; i < obj1Props.length; i++) {
            let char = obj1Props[i];
            if (obj1[char] !== obj2[char]) return false;
        }
        return true;
    }
    
    let pObj = hashMap(p, 0, p.length - 1);
    let ans = [];
    for (let i = 0; i < s.length - p.length + 1; i++) {
        let obj = hashMap(s, i, i+p.length-1);
        if (isEqual(obj, pObj)) {
            ans.push(i);
        }
    }
    return ans;
};