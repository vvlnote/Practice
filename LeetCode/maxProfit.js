var maxProfit = function(prices) {
    let minCost = Number.MAX_VALUE;
    let maxProfit = 0;
    
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minCost) {
            minCost = prices[i];
        } else {
            if (maxProfit < prices[i] - minCost) {
                maxProfit = prices[i] - minCost;
            }
        }
    }
    return maxProfit;
};