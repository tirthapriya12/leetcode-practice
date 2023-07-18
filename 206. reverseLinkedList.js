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