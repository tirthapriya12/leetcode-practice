/**
 * Approach:
 * Implement using double ended linkedlist queue 
 * to perform O(1) operations of add or delete.
 * Adding new elements in front of the queue and removing from the end.
 * last node in the queue represents LRU
 */


function Node(key, val, next = null, prev = null) {
    this.val = val;
    this.key = key
    this.next = next;
    this.prev = prev;
}

function Queue() {
    this.length = 0;
    this.first = null;
    this.last = null;
}

Queue.prototype.add = function (node) {

    //first node being added
    if (this.first === null || this.first === undefined) {
        this.first = node;
        this.last = node;
    } else {
        //add the node in the front always to make it most recently used
        node.next = this.first;
        this.first.prev = node;
        node.prev = null;
        this.first = node;
    }
    this.length++;
    return this;
}

Queue.prototype.remove = function (node) {
    if (node == this.first && node == this.last) {
        //list has only one node
        this.first = null;
        this.last = null;
    } else if (node == this.first) {
        //node is at the head of the list
        this.first = node.next;
        this.first.prev = null;
    } else if (node == this.last) {
        //node is at the tail of the list
        this.last = node.prev;
        this.last.next = null;
    } else {
        //node is in between head and tail
        let prev = node.prev;
        let next = node.next;
        prev.next = next;
        next.prev = prev;
    }
    this.length--;
}


/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.map = new Map();
    this.size = capacity;
    this.lruQueue = new Queue();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (this.map.has(key)) {
        //get the value and reorder it to bring it in front 
        //to make is most recently used
        let node = this.map.get(key);
        this.lruQueue.remove(node);
        this.lruQueue.add(node);
        return node.val;
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.map.has(key)) {
        //update the exisitng node
        let node = this.map.get(key);
        node.val = value;
        this.lruQueue.remove(node);
        this.lruQueue.add(node);
    }
    else {
        // if not present in map, add the new item but if queue is at capacity, 
        //remove the last element (which is least recently used by order)
        let node = new Node(key, value);
        this.map.set(key, node);
        this.lruQueue.add(node);
        
        if (this.map.size > this.size) {
            this.map.delete(this.lruQueue.last.key)
            this.lruQueue.remove(this.lruQueue.last);
        }
    }
    return null;
};

var obj = new LRUCache(2)
console.log(
    obj.put(1, 1),
    obj.put(2, 2),
    obj.get(1),
    obj.put(3, 3),
    obj.get(2),
    obj.put(4, 4),
    obj.get(1),
    obj.get(3),
    obj.get(4)
)



