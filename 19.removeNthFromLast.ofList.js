
//Approach 1: Naive-> count the lenght and then remove the item at length - n
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let start = head,end=head,prev;
    length = 0;
    while(end){
        end = end.next;
        length++;
    }

    if(length<n){
        return null;
    }
    if(length == n){
        //in this case n from last means first elem only 
        //so directly return next elm as head
        return head.next;
    }

    let count =0;
    while(count < length - n){
       prev=start;
       start=start.next;
       count++;
    }

    
    prev.next = start.next;
    start = null;
    return head;

};

//Approach 2: fast and slow pointer
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let start = head,end=head,prev = head;

//use 2 pointer fast and slow, move fast to nth place
    while(n){
        end = end.next;
        n--;
    }
//if after moving nth place fast is null then nth from last is head
    if(!end){
        return head.next;
    }
//if the elem is in between, reach till the nth item
    while(end.next){
       start=start.next;
       end=end.next;
    }
    start.next = start.next.next;
    return head;

};