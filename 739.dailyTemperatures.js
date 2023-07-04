/*
Approach MonoStack: use decreasing monotonic stack to maintain always smaller elements at top,
while pushing if the next element is larger than top, keep poping the top untill the incoming element can be placed
at the top as current minimum.
while poping count the index difference and store in the result array

*/
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    const result = Array(temperatures.length).fill(0);
    const decStack = [];

    let i = 0;
    while (i < temperatures.length) {


        while (temperatures[i] > temperatures[decStack[decStack.length - 1]] && decStack.length > 0) {
            const id = decStack.pop();
            result[id] = i - id;
        }
        decStack.push(i);
        i++;
    }
    return result;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))