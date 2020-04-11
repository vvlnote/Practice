var minDepth = function(root) {
    if (!root) return 0;
    //I am trying to use bfs
    let queue = [];
    let depth = 0;
    queue.push(root);
    
    while (queue.length > 0) {
        let length = queue.length;
        while (length > 0) {
            let currentNode = queue.shift();
            length -= 1;
            
            if (currentNode.left === null && currentNode.right === null) {
                depth += 1;
                return depth;
            } else {
                if (currentNode.left) queue.push(currentNode.left);
                if (currentNode.right) queue.push(currentNode.right);
            }
        }
        depth +=1 ;
    }
    return depth;
};