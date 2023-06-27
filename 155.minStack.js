var MinStack = function () {
    this.stack = [];
    this.minElm = Number.MAX_SAFE_INTEGER;
    this.size = 0;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    //if first elem being entered , update the values directly
    if (this.size === 0) {
        this.minElm = val;
        this.stack.push(val);
        this.size++;
        return;
    }
    //update current minElm if  new val being pushed is less than minElm
    if (val < this.minElm) {
        this.minElm = val;
    }
    this.stack.push(val);
    this.size++;
    return;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    if (this.size == 0) {
        return;
    }
    //check if top is equal to minElm , update the minElm
    if (this.stack[this.size - 1] === this.minElm) {
        var popped = this.stack.pop();
        this.size--;
        //find next min elm and save
        let i = this.size-1, tmpStack = [], localMin = Number.MAX_SAFE_INTEGER;
        while (i >= 0) {
            var val = this.stack.pop();
            tmpStack.push(val);
            if (val < localMin) {
                localMin = val;
            }
            i--;
        }
        this.minElm = localMin;
        //re popupulate the stack
        while (tmpStack.length) {
            this.stack.push(tmpStack.pop());
        }
        return popped;
    }
    this.size--;
    return this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    if (this.size === 0) return;
    return this.stack[this.size - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    if (this.size === 0) return;
    return this.minElm;
};



var obj = new MinStack()
var output = [obj.push(-2),
obj.push(0),
obj.push(-3),
obj.getMin(),
obj.pop(),
obj.top(),
obj.getMin()];
console.log(output);
