/**
 * @param {number[]} heights
 * @return {number}
 */

/**
 * check height for every pointer range and keep updating
 */
var maxArea = function (heights) {

    let left = 0, right = heights.length - 1;
    let prevArea = -1;
    while (left < right) {

        const tempArea = (right - left) * Math.min(heights[left], heights[right]);
        
        if (heights[left] > heights[right]) {
            right--;
        } else {
            left++;
        }

        prevArea = Math.max(prevArea,tempArea);

    }
    return prevArea;
};