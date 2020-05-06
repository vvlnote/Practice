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
var mergeTwoLists = function(l1, l2) {
    if (l1 === null) return l2;
    if(l2 === null) return l1;
    let p1 = l1;
    let p2 = l2;
    let ansList = null;
    if(p1.val < p2.val) {
        ansList = p1;
        p1 = p1.next;
    } else {
        ansList = p2;
        p2 = p2.next;
    }
    let p = ansList;
    while(p1 !== null && p2 !== null) {
        if (p1.val > p2.val) {
            p.next = p2;
            p2 = p2.next;
        } else {
            p.next = p1;
            p1 = p1.next;
        }
        p = p.next;
    }
    if (p1 !== null) {
        p.next = p1;
    }
    if (p2 !== null) {
        p.next = p2;
    }
    return ansList;     
};