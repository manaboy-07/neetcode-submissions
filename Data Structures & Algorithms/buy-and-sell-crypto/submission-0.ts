class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
       //ensure the price is positive
        const profits = []
        for (let i = 0; i< prices.length; i++){
            for (let j = i + 1; j < prices.length; j++){
                
                  if(prices[j] - prices[i] > 0){
                     let result = prices[j] - prices[i]
                  
                   profits.push(result)
                  }
                
            }
        }
        if(profits.length === 0){
            return 0
        }
        const maxsort = profits.sort((a, b) => b - a)
        console.log(maxsort)
        const answer = maxsort[0]
        return answer




    }
}
