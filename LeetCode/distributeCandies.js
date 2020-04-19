var distributeCandies = function(candies) {
    let candySet = new Set(candies);

    let candiesPerPerson = candies.length/2;
    return Math.min(candiesPerPerson, candySet.size);
};