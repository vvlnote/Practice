/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    if (!head || !head.next) return head;
    if (m === n) return head;
    let stack = [];
    let i = 1;
    let startNode = null;
    let p = head;
    while (i <= n) {
        if (i === m - 1) {
            startNode = p;
        } else if (i >= m) {
            stack.push(p);
        }
        i += 1;
        p = p.next;
    }
    let endNode = p;
    p = startNode;
    if (m === 1) {
        head = stack.pop();
        p = head;
    }
    while (stack.length > 0) {
            p.next = stack.pop();
            p = p.next;            
    }
    p.next = endNode;
    return head;
};