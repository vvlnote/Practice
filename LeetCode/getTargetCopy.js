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