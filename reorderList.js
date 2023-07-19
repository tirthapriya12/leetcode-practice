//Approach: use fast pointer slow pointer method to find the half of the list using the slow pointer.
// reverss from the half of the list and start mergeding?re-ordering alternately from left half and right half list
 
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    let slow = head;
    let fast = head;
    if (head.next == null || head == null) return;

    //reach to the middle elem
    while (fast !== null && fast.next !== null) {
        prev = slow
        slow = slow.next;
        fast = fast.next.next;
    }
    prev.next = null;
    //reverse from the middle elem
    let half = reverseList(slow);
    //reorder list
    let start = head;
    //go till end of the left half
    while (start) {
        l_next = start.next;
        r_next = half.next;
        start.next = half;
        /* left half already reached end so point element from right next to prevent it from getting skipped by the loop: loop checks for left half end only
        */
        if (!l_next) {
            half.next = r_next;
        } else {
            half.next = l_next;
        }
        start = l_next;
        half = r_next;
    }
};

var reverseList = function (head) {
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

