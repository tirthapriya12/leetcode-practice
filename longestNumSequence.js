//Approach 1: Sort and find sequenct: Object(nlogn)

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    nums = [...new Set(nums).values()];
    let sorted = nums.sort((a, b) => a - b);
    seqArr = [];
    if (nums.length === 0) return 0;
    let currSeq = [sorted[0]],
        prevNum = sorted[0];
    for (let i = 1; i < sorted.length; i++) {


        if (prevNum + 1 !== sorted[i]) {
            seqArr.push(currSeq);
            currSeq = [];
        }

        currSeq.push(sorted[i]);
        prevNum = sorted[i];

    }
    seqArr.push(currSeq);

    let maxArr = 0;
    seqArr.forEach(arr => {
        maxArr = arr.length > maxArr ? arr.length : maxArr;
    });
    return maxArr;
};



// Approach 2: (best) create a set and find if number less than current number exist in set , 
//if not then consider it a starting point and start finding the next sequence items in the set: Solution-> O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    number = new Set(nums);
    maxSeq = 0;
    for (const n of nums) {
        if (!number.has(n - 1)) {
            let sequence = 1;
            while (number.has(n + sequence)) {
                sequence += 1;
            }
            maxSeq = maxSeq > sequence ? maxSeq : sequence;
        }
    }

    return maxSeq;
};