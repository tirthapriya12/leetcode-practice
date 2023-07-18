function Node(val) {
    this.val = val;
    this.next = null;
}

function LinkedList() {

    this.head = null;
    this.size = 0;
}

LinkedList.prototype.isEmpty = function () {
    return this.head === null;
}

LinkedList.prototype.insertAtHead = function (node) {
    if (head === null) {
        this.head = node;
    }
    else {
        node.next = this.head;
        this.head = node;
    }
}

LinkedList.prototype.insertAt = function (node, index) {
    if (index < 0) return null;

    if (index === 0) {
        this.insertAtHead(node);
    }
    else {
        let current = this.head, prev;
        let i = 0;
        while (current.next !== null && i < index) {
            prev = current;
            current = current.next;
            i++;
        }
        node.next = current;
        prev.next = node;
    }
    this.size++;
    return node.element;
}

LinkedList.prototype.deleteAt = function (index) {

    if (index < 0 || index >= this.size)
        return console.log("Please Enter a valid index");
    else {
        var curr, prev, i = 0;
        curr = this.head;
        prev = curr;

        // deleting first element
        if (index === 0) {
            this.head = curr.next;
        } else {
            // iterate over the list to the
            // position to remove an element
            while (i < index) {
                i++;
                prev = curr;
                curr = curr.next;
            }

            // remove the element
            prev.next = curr.next;
        }
        this.size--;

        // return the remove element
        return curr.element;
    }
}

LinkedList.prototype.delete = function (elem) {
    if (this.isEmpty()) {
        return null;
    }
    var curr = this.head;
    while (curr.next !== null) {
        if (curr.element === elem) {

        }
    }
}

LinkedList.prototype.insert = function (elem) {
    if (this.isEmpty()) {
        this.head = new Node(elem);
        return elem;
    }

    let curr = this.head;

}

LinkedList.prototype.printAll = function () {
    let curr = this.head;
    let printElem = '';
    while (curr.next !== null) {
        printElem += current.element + '->';
        curr = curr.next;
    }
    console.log(printElem + 'null');
}

LinkedList.prototype.reverse = function (head) {
    let curr = head, prev = null, next = null;
    while (curr !== null) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    head = prev
    return head;
}