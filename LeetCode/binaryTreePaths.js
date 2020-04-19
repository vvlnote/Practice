var binaryTreePaths = function(root) {
   //use recursive to implement DFS
    let ans = [];
    if (!root) return ans;
    let currentPath = root.val.toString();
    

    if (!root.left && !root.right) {
        ans.push(currentPath);
        return ans;
    }
    
    if(root.left){ dfs(root.left, currentPath, ans);}
    if(root.right){ dfs(root.right, currentPath, ans);}
    return ans;

    function dfs(node, currentPath, ans) {
        currentPath += '->' + node.val;
        
        if (!node.left && !node.right) {
            ans.push(currentPath);
            return;
        }
        if (node.left){ dfs(node.left, currentPath, ans) ;}
        if (node.right) {dfs(node.right, currentPath, ans);}
    }
};