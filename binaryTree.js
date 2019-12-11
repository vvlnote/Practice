let arr = [8,10,12,5,3,6];
console.log(`array = ${arr}`);

class BinarySearchTree {
	contructor () {
		this.root = null;
	}

	insertNode(val) {
		let node = {
			val: val,
			left: null,
			right: null
		};
		let currentNode;
		if(this.root == null) {
			this.root = node;	
		} else {
			currentNode = this.root;
			while (currentNode) {
				if (currentNode.val > val) {
					if (currentNode.left == null) {
						currentNode.left = node;
						break;
					} else { currentNode = currentNode.left}
				} else if  (currentNode.val < val) {
					if (currentNode.right == null) {
						currentNode.right = node;
						break;
					} else { currentNode = currentNode.right;}
				} else {//the same value, we will ignore it
					break;
				}
			}
		}
	}


	displayInOrderRecursive() {
		function inOrderHelper(node) {
			if (node != null) {
				inOrderHelper(node.left);
				console.log(`node = ${node.val}`);
				inOrderHelper(node.right);
			}
		}
		if (this.root == null) {
			console.log(`empty tree`);
			return;
		} else {
			inOrderHelper(this.root);
		}
	};

	displayPostOrderRecursive() {
		function postOrderHelper(node) {
			if (node != null) {
				postOrderHelper(node.left);
				postOrderHelper(node.right);
				console.log(`node = ${node.val}`);
			}
		}
		if (this.root == null){
			console.log(`this is an empty tree`);
		} else {
			postOrderHelper(this.root);
		}
	}

	displayPreOrderRecursive() {
		function preOrderHelper(node){
			if (node != null) {
				console.log(`node = ${node.val}`);
				preOrderHelper(node.left);
				preOrderHelper(node.right);
			}
		}
		if (this.root == null){
			console.log(`this is an empty tree`);
		} else {
			preOrderHelper(this.root);
		}
	}

	displayPreOrderIterative() {
		//this will print out the root first, then left child, and right child
		// 1. Create an empty Stack
		// 2. Push the root into Stack
		// 3. Loop until Stack is empty
		// 4. Pop the last node and print its value
		// 5. Push right and left node if they are not null
		// 6. Repeat from step 4 to 6 again.

		let stack = [];
		stack.push(this.root);
		while (stack.length > 0) {
			let currentNode = stack.pop();
			console.log(`node = ${currentNode.val}`);
			if (currentNode.right != null) {
				stack.push(currentNode.right);
			}
			if (currentNode.left != null) {
				stack.push(currentNode.left);
			}
		}
	}

	displayInOrderIterative() {
		let stack = [];
		let currentNode = this.root;


		while (true) {
			// console.log(`currentNode = ${currentNode}`);
			while(currentNode) {
				stack.push(currentNode);
				currentNode = currentNode.left;
			}

			if (stack.length == 0) return;

			currentNode = stack.pop();
			console.log(`node = ${currentNode.val}`);
			currentNode = currentNode.right;
		}
	}


};



let bst = new BinarySearchTree()
for (let i = 0; i < arr.length; i ++ ) {
	bst.insertNode(arr[i]);
}

console.log('');
console.log('');
console.log(`========= Display Binary Tree in InOrder ======`);
bst.displayInOrderRecursive();



console.log('');
console.log('');
console.log(`========= Display Binary Tree in InOrder interatively ======`);
bst.displayInOrderIterative();

console.log('');
console.log('');
console.log(`========= Display Binary Tree in PostOrder ======`);
bst.displayPostOrderRecursive();

console.log('');
console.log('');
console.log(`========= Display Binary Tree in PreOrder ======`);
bst.displayPreOrderRecursive();


console.log('');
console.log('');
console.log(`========= Display Binary Tree in PreOrder interatively ======`);
bst.displayPreOrderIterative();

console.log('');
console.log('');