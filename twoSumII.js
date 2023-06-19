/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let p1 = 0, p2 = numbers.length-1;

    while (p1 < p2) {
        
        if (numbers[p1] + numbers[p2] === target) {
            return [p1 + 1, p2 + 1];
        }
        if (numbers[p1] + numbers[p2] > target) {
           p2--;
        }
        else {
            p1++;
        }
    }
};


