/**
 * @param {number[]} prices
 * @return {number}
 */
/**
 * update the maxprofit and minVal and ensure the index of minVal never preceed leading pointer (j)
 */
var maxProfit = function(prices) {
    if(prices.length <= 1) return 0;

    let maxProfit =0;
    let minVal= Number.MAX_SAFE_INTEGER;
    let maxVal = Number.MIN_SAFE_INTEGER;
    let i = 0, j = 1;
   
    while(i<j){
        minVal = Math.min(prices[i],minVal);
        maxProfit = Math.max(prices[j]-minVal,maxProfit);
        i++;
        if(j+1<prices.length){
            j++;
        }
    }
    return maxProfit;
};

console.log(maxProfit([7,6,4,3,1]));