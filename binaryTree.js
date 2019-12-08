let arr = [8,10,12,5,3,6];
console.log(`array = ${arr}`);

class BinarySearchTree {
	contructor () {
		this.root = null;
	}

	insertNode(val) {
		// console.log(`insertNode : val = ${val}`);
		let node = {
			val: val,
			left: null,
			right: null
		};
		let currentNode;
		if(this.root == null) {
			this.root = node;
			// console.log(`root = ${this.root.val}`);
			
		} else {
			currentNode = this.root;
			while (currentNode) {
				// console.log(`currentNode = ${currentNode.val}`);
				if (currentNode.val > val) {
					// console.log("for left side");
					if (currentNode.left == null) {
						currentNode.left = node;
						// console.log(`currentNode.left = ${currentNode.left.val}`);
						break;
					} else { currentNode = currentNode.left}
				} else if  (currentNode.val < val) {
					// console.log('for right side');
					if (currentNode.right == null) {
						currentNode.right = node;
						// console.log(`currentNode.right = ${currentNode.right.val}`);
						break;
					} else { currentNode = currentNode.right;}
				} else {//the same value, we will ignore it
					// console.log('no duplicate value');
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


};



let bst = new BinarySearchTree()
for (let i = 0; i < arr.length; i ++ ) {
	// console.log(arr[i]);
	bst.insertNode(arr[i]);
}

// console.log(bst);

console.log(`========= Display Binary Tree in InOrder ======`);
bst.displayInOrderRecursive();

console.log('');
console.log('');
console.log(`========= Display Binary Tree in PostOrder ======`);
bst.displayPostOrderRecursive();