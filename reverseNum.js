/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let num = 0, isNegative;
    if (x < 0) {
        x = Math.abs(x);
        isNegative = true;
    }

    while (x) {

        num = num * 10 + x % 10;
        x = Math.floor(x / 10);

        if (isNegative && num * -1 < -(Math.pow(2, 31))) {
            return 0
        }
        else if (!isNegative && num > (Math.pow(2, 31) - 1)) {
            return 0;
        }
    }
    return isNegative ? num * -1 : num;
};

console.log(reverse(-123));