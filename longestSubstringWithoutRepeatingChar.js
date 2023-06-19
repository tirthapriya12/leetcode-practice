/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length <= 1) return s.length;
    const seenChars = new Set();
    var result = 0;
    var left = 0, right = 0;
    while (right < s.length) {
        if (!seenChars.has(s[right])) {
            seenChars.add(s[right]);
            result = Math.max(result, seenChars.size);
            right++;
        } else {
            //left is not conisdered anymore so move left and delete the character in seen Set
            seenChars.delete(s[left]);
            left++;

        }
    }

    return result;
};

console.log(lengthOfLongestSubstring("dvdf"));