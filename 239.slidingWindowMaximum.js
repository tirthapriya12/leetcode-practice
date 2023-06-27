
// Approach 1:  failing with time limit exceeded for large window sizes like 50000
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow1 = function (nums, k) {
    let currMax = Number.MIN_SAFE_INTEGER;
    const results = [];
    for (let i = 0; i < k; i++) {
        currMax = Math.max(currMax, nums[i]);
    }
    results.push(currMax);

    let right = k,
        left = 1;
    currMax = Number.MIN_SAFE_INTEGER;
    while (right < nums.length) {
        for (let j = left; j <= right; j++) {
            currMax = Math.max(currMax, nums[j]);

        }

        results.push(currMax);
        right++;
        left++;
        currMax = Number.MIN_SAFE_INTEGER;
    }
    return results;
};


/* Approach 2 : use deque and fill it with number indexes,
 before pushing a new number index in deque check and remove if the elements are smaller than the current number pointed by right.
 store front of deque in result as it will be the max value of the current window, since we are removing all the smaller ones 
 by previous checks
 */

/**
* @param {number[]} nums
* @param {number} k
* @return {number[]}
*/
var maxSlidingWindow = function (nums, k) {
    let left = 0, right = 0;
    let deque = [], result = [];

    while (right < nums.length) {
        //remove all the elements (indexes of elements) from the elements in deque from the end which are smaller than current number, which will ensure your deque contains current maxes
        while (deque.length && nums[deque[deque.length - 1]] < nums[right]) {
            deque.pop();
        }

        //store index of the elements for convenience of moving the window
        deque.push(right)
        //if front of deque has lesser index than left pointer, 
        //we should remove them since that number falls 
        //outside of the current window and it's of no use anymore
        if (left > deque[0]) {
            deque.shift();
        }

        //if right has gone past k length update left pointer to keep the window moving
        if (right + 1 >= k) {
            result.push(nums[deque[0]]);
            left++;
        }

        right++;
    }
    return result;
};

console.log(maxSlidingWindow([1, -1], 1));