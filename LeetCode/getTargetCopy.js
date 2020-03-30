var getTargetCopy = function(original, cloned, target) {
    // use queue
   if (original === null) {
       return null;
   }
    let queue = [];
    queue.push(cloned);
    while (queue.length > 0) {
        let node = queue.shift();
        if (node.val === target.val) {
            return node;
        }
        if (node.left != null) {
            queue.push(node.left);
        }
        if (node.right != null) {
            queue.push(node.right);
        }
    }
    return null;
};


var getTargetCopyRecursive = function(original, cloned, target) {
    // use recursive
   if (original === null) {
       return null;
   }
   if (cloned.val === target.val) {
       return cloned;
   }
    let left = getTargetCopyRecursive(original.left, cloned.left, target);
    let right = getTargetCopyRecursive(original.right, cloned.right, target);
    if (left) return left;
    if (right) return right;
   
    return null;
};