/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
/**
 * Approach: create maps for both the string.
 * fill s2 map while iterating through it and check it with s1 map,
 * if matches return true immediately else check if left pointer needs to be moved
 * if right - left is about to exceed s1.length update left and decrease the freq
 *  of the char left pointer was holding in s2 map
 */
var checkInclusion = function (s1, s2) {
    const checkMap = new Map();
    let left = 0, right = 0;
    const sampleMap = new Map();
    for (let i = 0; i < s1.length; i++) {
        const data = sampleMap.get(s1[i]) ?? 0;
        sampleMap.set(s1[i], data + 1);
    }

    while (right < s2.length) {

        const data = checkMap.get(s2[right]) ?? 0;
        checkMap.set(s2[right], data + 1);


        let hasMatch = true;
        
        for (let [key, freq] of sampleMap) {
            const char = checkMap.get(key) ?? 0;
            if (!char || char !== freq) {
                hasMatch = false;
                break;
            }
        }

        if (hasMatch) {
            return true;
        }

        if(right-left === s1.length-1){
            checkMap.set(s2[left], checkMap.get(s2[left]) - 1);
            left++;
        }
        right++;
        
    }
    return false;
};

console.log(checkInclusion('ab', 'eidbaooo'));