/**
 * Approach nums is sort4ed an d rotated , even after roatttion the rotated part and un rotated part will remain sorted
 * we have to find the starting of rotation using Binary search and we will get the smallest element.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let start = 0,
        end = nums.length - 1,
        mid;
    while (start < end) {
        mid = Math.floor(start + end) / 2;
        //if mid is greater than end then shortest elem will alway 
        //lie in the right half of the array, so search in  mid+1 to end in next iteration
        if (nums[mid] > nums[end]) {
            start = mid + 1;

        } else {
            end = mid;
        }
    }
    return nums[start];
};


