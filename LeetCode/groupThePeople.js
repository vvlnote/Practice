var groupThePeople = function(groupSizes) {
    if (groupSizes == null) {
        return [];
    }
    let result = [];
    let group = new Object();
    for (let i = 0; i < groupSizes.length; i ++) {
        if (group[groupSizes[i]] === undefined) {
            if (groupSizes[i] === 1) {
                result.push([i]);
            } else {
                group[groupSizes[i]] = [];
                group[groupSizes[i]].push(i);                
            }

        } else {
                group[groupSizes[i]].push(i);
                if (group[groupSizes[i]].length === groupSizes[i]){
                    result.push(group[groupSizes[i]]);
                    group[groupSizes[i]] = [];
                }
            }
        }

    return result;
};