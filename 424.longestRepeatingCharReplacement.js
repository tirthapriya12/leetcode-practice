/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
/**
 * Approach :
 * start with 0 index and keep increasing the right pointer and not down the charOccurence at S[right]
 * chekc validity of window for k modifications by (length of window) - maxfrequencyOfaCharinMap <=k 
 * if it doesn't meet reduce appearance of S[left] in charOccurence map and  increment left, if occurence reaches 0 remove 
 * the char from the map since we moved away from it's position and it doesn't exist inside the sliding window anymore
 */
var characterReplacement = function (s, k) {
    let charOccurance = {};
    let maxFreq = 0;
    let result = 0;
    let p1 = 0, p2 = 0;
    while (p2 < s.length) {

        if (charOccurance[s[p2]]) {
            charOccurance[s[p2]] += 1
        } else {
            charOccurance[s[p2]] = 1
        }

        /*checking validty of sliding window frequency with the 
        no. of modifications we can make, because we are 
        already maintaining the occurances in the map and 
        remove the chars that are not in window anymore,
        and moving ahead  the left pointer
        */
        while ((p2 - p1 + 1) - Math.max(...Object.values(charOccurance)) > k) {
            charOccurance[s[p1]]--;
            if (charOccurance[s[p1]] == 0) delete charOccurance[s[p1]];
            p1++
        }
        //Or

    /**
     * most effiecient but tough to reach to this logic, 
     * maintain the maxFrequency of the character from the charOccurance map in every iteration
     * which reduces complexity to check for all alphabets in charOccurence map 
     * to get the char with max occurence which can go upto O(26)..
     * 
     * maxFreq = Math.max(maxFreq,charOccurance[s[p2]]);
     * while ((p2 - p1 + 1) - maxFreq > k) {
            charOccurance[s[p1]]--;
            if (charOccurance[s[p1]] == 0) delete charOccurance[s[p1]];
            p1++
        }
     * 
     */


        result = Math.max(result, p2 - p1 + 1);
        p2++;
    }
    return result;
};