function constructBST(nums) {

	let root = null;
	let currentNode = null;

	for (let i = 0; i < nums.length; i++){
		let node = {
			val: nums[i],
			left: null,
			right: null
		}
		if (i == 0) {
			root = node;
		} else {
			root = insertNode(root, node);
		}
	}
	displayPreOrderRecursive(root);
	return root;
}

function insertNode(root, node) {
	let currentNode = root;
	while(currentNode) {
		if (currentNode.val > node.val) {
			if (currentNode.left == null) {
				currentNode.left = node;
				break;
			} else{
				currentNode = currentNode.left;
			}
		} else {
			if (currentNode.right == null) {
				currentNode.right = node;
				break;
			} else {
				currentNode = currentNode.right;
			}
		}		
	}
	return root;
}

function displayPreOrderRecursive(root) {
	function preOrderHelper(node){
		if (node != null) {
			console.log(`node = ${node.val}`);
			preOrderHelper(node.left);
			preOrderHelper(node.right);
		}
	}
	if (root == null){
		console.log(`this is an empty tree`);
	} else {
		preOrderHelper(root);
	}
}

function sumOfLeafNodesRecursive(root){
	let sum = 0;
	let stack = [];

	function treeTraversHelper(node) {
		if (node.left == null && node.right == null) {
			sum += node.val;
		} else {
			if (node.left != null){
				treeTraversHelper(node.left);
			}
			if (node.right != null) {
				treeTraversHelper(node.right);
			}
		}
	}

 	treeTraversHelper(root);
 	console.log("-".repeat(10), ' Recursive ', "-".repeat(10));
	console.log(`sum of leaf nodes = ${sum}`);
}

function sumOfLeafNodesStack(root) {
	let stack = [];
	let sum = 0;
	stack.push(root);
	while (stack.length > 0) {
		let currentNode = stack.pop();
		if (currentNode.left == null && currentNode.right == null) {
			sum += currentNode.val;
		} else {
			if (currentNode.left != null) {
				stack.push(currentNode.left);
			}
			if (currentNode.right != null) {
				stack.push(currentNode.right);
			}
		}
	}
 	console.log("-".repeat(10), ' Stack ', "-".repeat(10));
	console.log(`sum of leaf nodes = ${sum}`);
}

// let nums = [7, 4, 12, 3, 6, 8, 1, 5, 10];

// constructBST(nums);

// nums = [1, 3, 4, 6, 7, 8];

// constructBST(nums);

let nums = [67, 34, 82, 12, 45, 78];

let root = constructBST(nums);

console.log('='.repeat(20), ' Sum of leaf nodes in BST ', "=".repeat(20));
console.log(`input num array = [${nums}]`);

sumOfLeafNodesRecursive(root);

sumOfLeafNodesStack(root);

let nums_1 = [45];
console.log('='.repeat(20), ' Sum of leaf nodes in BST ', "=".repeat(20));
console.log(`input num array = [${nums_1}]`);

root = constructBST(nums_1);

sumOfLeafNodesRecursive(root);

sumOfLeafNodesStack(root);