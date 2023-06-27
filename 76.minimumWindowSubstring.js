/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let left = 0; right = 0;
    let result = { left: -1, right: Number.MAX_SAFE_INTEGER };
    const tFreq = new Map();
    for (let i = 0; i < t.length; i++) {
        let freq = tFreq.get(t[i]) ?? 0;
        tFreq.set(t[i], freq + 1);
    }

    const sFreq = new Map();
    while (left < s.length) {

        let freq = sFreq.get(s[right]) ?? 0;
        sFreq.set(s[right], freq + 1);

        let hasMatch = false;
        let match_count =0;
        for (let [key, freq] of tFreq) {
            let s_freq = sFreq.get(key);
            if (!sFreq.has(key)) {hasMatch = false; continue;}
            if (s_freq >= freq) {
                hasMatch = true;
                match_count++;
            }else{
                hasMatch = false;
            }
        }

        hasMatch = tFreq.size === match_count;

        if (hasMatch) {
            const tempResult = { left, right };
            const tempLength = right - left;
            const resultLength = result.right - result.left;
            result = resultLength < tempLength ? result : tempResult;

            let lFreq = sFreq.get(s[left]);
            sFreq.set(s[left], lFreq ? lFreq - 1 : 0);
            left++;
        }

        if (right < s.length) {
            right++;
        }

        // if(left > s.length - t.length) break;
    }

    if (result.left === -1 || result.right === Number.MAX_SAFE_INTEGER) {
        return "";
    }

    return s.substring(result.left, result.right+1) ?? '';
};

console.log(minWindow('ADOBECODEBANC', 'ABC'));