var numTeams = function(rating) {
    let count = 0;
    for (let i = 0; i < rating.length -2; i++) {
        for (let j = i+1; j < rating.length - 1; j++) {
            let k = j+1;
            while(k < rating.length) {
                if (rating[i] < rating[j]) {
                   if (rating[j] < rating[k]) {
                       count += 1;
                   } 
                } else if (rating[i] > rating[j]) {
                    if (rating[j] > rating[k]) {
                        count += 1;
                    }
                }
                k+=1;
            }
        }
    }
    return count;
};