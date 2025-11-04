const maxProfitBruteForce = (prices) => {
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            let profit = prices[j] - prices[i];
            if (profit > maxProfit) maxProfit = profit;
        }
    }
    return maxProfit;
};

const maxProfit = (prices) => {
    let mini = prices[0],
        maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        let cost = prices[i] - mini;
        maxProfit = Math.max(maxProfit, cost);
        mini = Math.min(mini, prices[i]);
    }
    return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
