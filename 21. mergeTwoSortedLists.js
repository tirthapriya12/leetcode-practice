/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let temp = { val: 0, next: null };
    let merged = temp;
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            merged.next = list1;
            list1 = list1.next;
        }
        else {
            merged.next = list2;
            list2 = list2.next;
        }
        merged = merged.next;
    }

    if (list1) {
        merged.next = list1;
    }
    else{
        merged.next = list2;
    }

    return temp.next;
};