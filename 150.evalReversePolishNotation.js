/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const evalStack = [];
    const operationCheckSet = new Set(['+', '-', '*', '/']);

    for (let i = 0; i < tokens.length; i++) {
        if (operationCheckSet.has(tokens[i])) {
            let num2 = parseInt(evalStack.pop()), num1 = parseInt(evalStack.pop());
            let result = 0;
            switch (tokens[i]) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    result = parseInt(num1 / num2);
                    break;
            }
            evalStack.push(result);
        } else {
            evalStack.push(tokens[i]);
        }
    }
    return evalStack.pop();
};

console.log(evalRPN(["4","-2","/","2","-3","-","-"]));