let arr = [8,10,12,5,3,6];

class BinarySearchTree {
	contructor () {
		this.root = null;
	}

	insertNode(val) {
		console.log(`insertNode : val = ${val}`);
		let node = {
			val: val,
			left: null,
			right: null
		};
		let currentNode;
		if(this.root == null) {
			this.root = node;
			console.log(`root = ${this.root.val}`);
			
		} else {
			currentNode = this.root;
			while (currentNode) {
				console.log(`currentNode = ${currentNode.val}`);
				if (currentNode.val > val) {
					console.log("for left side");
					if (currentNode.left === null) {
						currentNode.left = node;
						break;
					} else { currentNode = currentNode.left}
				} else if  (currentNode.val < val) {
					console.log('for right side');
					if (currentNode.right === null) {
						currentNode.right = node;
						break;
					} else { currentNode = currentNode.left;}
				} else {//the same value, we will ignore it
					console.log('no duplicate value');
					break;
				}
			}
		}
	}

	inorder() {

	}
};

let bst = new BinarySearchTree()
for (let i = 0; i < arr.length; i ++ ) {
	console.log(arr[i]);
	bst.insertNode(arr[i]);
}

console.log(bst);