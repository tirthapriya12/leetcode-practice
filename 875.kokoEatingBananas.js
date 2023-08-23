/**
 * Approach: Koko can eat min 1 pile of banana & maximum  max(...piles).
 * we can apply binary search and find a value of which koko can finish the banans in <= h hours,
 * the speed of eating banana that is less than max(piles) we will get the result
 * 
 * consider 1 as left ptr and Max(piles) as right ptr (pointer represent min speed  & max speed of eating) and  find mid on each iteration 
 * and find sum of hours to see if it's less than 'h'
 * if 'hours' is less than h move the right ptr to mid - 1 because any value more than that is max and we are searching for minimum speed.
 * otherwise set the l to mid + 1 because we didn't finish within allowed hours 'h'
 */

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    let l = 1, r = Math.max(...piles);
    let result = r;
    while (l <= r) {
        let k = Math.floor((l + r) / 2);
        let hours = 0;
        for (let p of piles) {
            hours += Math.ceil(p / k);
        }

        if (hours <= h) {
            r = k - 1;
            result = Math.min(k, result);
        } else {
            l = k + 1;
        }
    }
    return result;
};

console.log(minEatingSpeed([30,11,23,4,20],5));