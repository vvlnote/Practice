/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findSecondMinimumValue = function(root) {
    //use bfs with stack implmentation
    
    let stack = [];
    stack.push(root);
    let min1 = root.val;
    let min2 = Number.MAX_VALUE;
    
    while(stack.length > 0) {
        let currentNode = stack.pop();
        if (currentNode.val > min1) {
            if (currentNode.val < min2) {
                min2 = currentNode.val;
            }
        }
        if (currentNode.right != null) {
            stack.push(currentNode.right);
        } 
        if (currentNode.left != null) {
            stack.push(currentNode.left);
        }
    }
    
    return min2 === Number.MAX_VALUE? -1: min2;
    
};