class TreeNode {
    constructor(left, right, val) {
        this.val = (val === undefined ? 0 : val);
		this.left = (left === undefined ? null : left);
		this.right = (right === undefined ? null : right);
	}
}

var invertTree = function(root) {
    if (root == null) return null;
	let aux = invertTree(root.left);
	root.left = invertTree(root.right);
	root.right = aux;
	return root;
};

let tree = new TreeNode(new TreeNode(new TreeNode (null, null, 3), new TreeNode(null, null, 4), 2), new TreeNode(new TreeNode(null, null, 6), new TreeNode(null, null, 7), 5), 1);
console.log (tree);
console.log(invertTree(tree));