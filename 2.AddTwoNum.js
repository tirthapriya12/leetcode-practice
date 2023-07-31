// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
* @param {ListNode} l1
* @param {ListNode} l2
* @return {ListNode}
*/

// Recursive SOlution:
var addTwoNumbers = function (l1, l2) {
    let dig1 = 0, dig2 = 0, carry = 0, sum = 0;
    let head = new ListNode();

     sumOfList(head, l1, l2);
     return head.next;
};

function sumOfList(head, l1, l2, carry = 0) {
    
    let dig1 = 0, dig2 = 0, sum = 0;

    let next = new ListNode();
    if (!l1 && !l2) {
        //if there is a trailing carry when list ends, cretae an new node for the carry and return the list
        if(carry){
            next.val = carry;
            head.next=next;
        }
        return;
    }
   
    
    dig1 = l1?.val ?? 0;
    dig2 = l2?.val ?? 0;
    let tempSum = (carry + dig1 + dig2);
    if (tempSum > 9) {
        next.val = tempSum % 10;
        carry = Math.floor(tempSum / 10);
    } else {
        next.val = tempSum;
        carry=0;
    }
     head.next = next;

    

   sumOfList(next,l1?.next,l2?.next,carry);
}


//Iterative solution
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let sum =0,carry=0,list=null,tlist=null;
    // if(l1.val == 0) return l2.value;
    while(l1 !=null || l2 !=null){
        
        let x = l1!=null ? l1.val:0;
        let y = l2 !=null ? l2.val:0;
        sum = x+y+carry;
        carry = Math.floor(sum/10);
        sum = sum % 10;
        if(list == null)
         list = new ListNode(sum,null), tlist = list;
        else
        {
         tlist.next = new ListNode(sum,null);
         tlist = tlist.next;
        }
        if(l1 != null) l1 = l1.next;
        if(l2!=null) l2 = l2.next;
    }
    if(carry >0){
            tlist.next = new ListNode(carry,null);
        }
    return list;
};