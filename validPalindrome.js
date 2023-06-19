/**
 * apply two pointer :
apply regex and remove non alpha numeric chars
increase i+1 and j -1
and keep checking till i<=j

 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.toLowerCase();
    s = s.replace(/[^0-9a-z]/gi, '');
    let i = 0, j = s.length - 1;

    while (i <= j) {
        if (s[i] != s[j]) {
            return false;
        }
        i++; j--;
    }

    return true;
};

isPalindrome('ab_a');