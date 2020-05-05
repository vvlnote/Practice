var flatten = function(root) {
    let queue = [];
    function inPlaceTrav(node) {
        if (node == null) return;
        queue.push(node);
        inPlaceTrav(node.left);
        inPlaceTrav(node.right);
    
    }
    
    inPlaceTrav(root);
    
    queue.shift();//remove the root node from the queue
    let parentNode = root;
    while(queue.length > 0) {
        let currentNode = queue.shift();
        parentNode.left = null;
        parentNode.right = currentNode;
        parentNode = currentNode;
    }
    
};