var nextGreatestLetter = function(letters, target) {
    function binSearch(letters, startIndex, endIndex, target) {
        if (startIndex >= endIndex) {
            if (letters[endIndex] > target) {
                return letters[endIndex];
            } else {
                return letters[0];
            }
        }
        let middle = Math.floor(startIndex + (endIndex - startIndex)/2);

        if (letters[middle] <= target) {
            startIndex = middle+1;
        } else {
            endIndex = middle;
        }
        return binSearch(letters, startIndex, endIndex, target);
    }
    
    let ans = binSearch(letters, 0, letters.length -1, target);
    return ans;
};