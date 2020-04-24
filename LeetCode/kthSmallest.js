/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    //traverse this tree in-order
    
    function inOrder(node, arr) {
        if (node === null) return;
        inOrder(node.left, arr);
        arr.push(node.val);
        inOrder(node.right, arr);
    }
    
    
    let arr = [];
    inOrder(root, arr);
    return (arr[k-1]);
};