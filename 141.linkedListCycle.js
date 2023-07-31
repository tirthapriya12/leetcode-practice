/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

 /**
 Approach: slow-fast pointer approach, keeping moving the pointers and they will eventually meet each other at some time in iteration, if cycle not present the fats pointer will reach end the loop breaks out to return false
  */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    var slow = head;
    var fast = head;

    while(fast?.next){
        slow = slow.next;
        fast = fast.next.next;

        if(slow === fast){
            return true;
        }
    }
    return false
};