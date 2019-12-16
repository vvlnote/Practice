Under this folder, will have my own javascript practice code. if you are interested, your comments and suggestions are welcome.

binaryTree.js:
1. inside this file, there is a array, which is [8,10,12,5,3,6]. will based on the sequence to build a binary serach tree. 
2. there are 3 way to display the tree => inorder, preorder, and postorder.
3. after you fork this code, in the terminal, you can run node binaryTree.js, you can run the code.
the binary tree is as following: 
                                        8
                                       / \
                                      5   10
                                     / \    \
                                    3   6    12
                                
 preOrder => root -> left subtree -> right subtree
 [8, 5. 3, 6, 10, 12]
 
 inOrder => left subtree -> root -> right subtree
 [3, 5, 6, 8, 10, 12]
 
 postOrder => left subtree -> right subtree -> root
 [3, 6, 5, 12, 10, 8]
