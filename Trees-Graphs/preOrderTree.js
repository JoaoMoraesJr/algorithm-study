//Leetcode - Binary Tree Preorder Traversal (Easy) - https://leetcode.com/problems/binary-tree-preorder-traversal/
//Given the root of a binary tree, return the preorder traversal of its nodes' values.

var preorderTraversal = function(root) {
    function preOrder(node) {
        if (node == null) return;
        output.push(node.val);
        preOrder(node.left);
        preOrder(node.right);
    } 
    let output = [];
    preOrder(root);
    return output;
};

console.log(preorderTraversal([1,null,2,3]));