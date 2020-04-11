var sumEvenGrandparent = function(root) {
    if (root === null) return 0;
    
    let sum = 0;
    
    function dfs(node) {
        if (node != null) {
            if (node.val % 2 === 0) {
                
                let child = node.left;
                
                if (child) {
                    if (child.left){
                        sum += child.left.val;
                    }
                    if (child.right) {
                        sum += child.right.val;
                    }
                }
                child = node.right;
                if (child) {
                    if (child.left) {
                        sum += child.left.val;
                    }
                    if (child.right) {
                        sum += child.right.val;
                    }
                }
            }
            dfs(node.left);
            dfs(node.right);
        }

    }
    
    dfs(root);
    return sum;
    
};