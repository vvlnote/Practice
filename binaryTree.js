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
		stack.push(currentNode);
		currentNode = currentNode.left;

		while (stack.length > 0 || currentNode) {
			while(currentNode) {
				stack.push(currentNode);
				currentNode = currentNode.left;
			}

			currentNode = stack.pop();
			console.log(`node = ${currentNode.val}`);
			currentNode = currentNode.right;
		}
	}

	displayPostOrderIterative() {
		let stack1 = [];
		let stack2 = [];
		stack1.push(this.root);

		console.log(`    ===================Before push into 2nd stack====================`);
		while(stack1.length > 0) {
			let currentNode = stack1.pop();
			console.log(`node = ${currentNode.val}`);
			stack2.push(currentNode);
			if (currentNode.left != null){
				stack1.push(currentNode.left);
			}
			if (currentNode.right != null){
				stack1.push(currentNode.right);
			}
			
		}
		console.log(`    ==================After push into 2nd stack====================`);
		while (stack2.length > 0) {
			console.log(`node = ${stack2.pop().val}`);
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
console.log(`========= Display Binary Tree in InOrder iteratively ======`);
bst.displayInOrderIterative();

console.log('');
console.log('');
console.log(`========= Display Binary Tree in PreOrder ======`);
bst.displayPreOrderRecursive();


console.log('');
console.log('');
console.log(`========= Display Binary Tree in PreOrder iteratively ======`);
bst.displayPreOrderIterative();

console.log('');
console.log('');


console.log(`========= Display Binary Tree in PostOrder ======`);
bst.displayPostOrderRecursive();

console.log('');
console.log('');

console.log(`========= Display Binary Tree in PostOrder iteratively with 2 stacks ======`);
bst.displayPostOrderIterative();

console.log('');
console.log('');