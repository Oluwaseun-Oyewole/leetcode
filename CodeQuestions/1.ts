// Given a list of prices, where each element prices[i]
// represents the price of a particular stock on day i,
//  determine the maximum profit to be made by purchasing the stock and selling it on a future date.
//  If it is not possible to generate a profit, return 0.

function stockMarketOption(prices: number[]) {
  let minPrice = 0;
  let profit = 0;

  for (let price of prices) {
    minPrice = Math.min(minPrice, price);
    profit = Math.max(profit, price - minPrice);
  }
  return profit;
}
