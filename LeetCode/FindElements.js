/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var FindElements = function(root) {
    let stack = [];
    stack.push(root);
    root.val = 0;
    while(stack.length > 0){
        let currentNode = stack.pop();
        if (currentNode.left !== null) {
            currentNode.left.val = 2*currentNode.val + 1;
            stack.push(currentNode.left);
        }
        if (currentNode.right != null) {
            currentNode.right.val = 2*currentNode.val + 2;
            stack.push(currentNode.right);
        }
    }
    this.root = root;
};

/** 
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function(target) {
    const find = (node, target) => {
        if (node === null) return false;
        if (node.val === target) {
            return true;
        }
        return (find(node.left, target) || find(node.right, target));
    }
    
    return find(this.root, target);

};

/** 
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */