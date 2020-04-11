var minSteps = function(s, t) {
  let sMap = new Map();
    for (let i = 0; i < s.length; i++) {
        let val = sMap.get(s[i]);
        if (val === undefined) {
            val = 1;
        } else {
            val += 1;
        }
        sMap.set(s[i], val);
    }
    let step = 0;
    for (i = 0; i < t.length; i++) {
        let val = sMap.get(t[i]);
        if (val !== undefined) {
            val -= 1;
            if (val === 0) {
                sMap.delete(t[i]);
            } else {
                sMap.set(t[i], val);
            }
        }
    }
    sMap.forEach((val, key) =>{
        step += val;
    });
    return step;