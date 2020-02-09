class Stack {
	contructor() {
		this.container = [];
	}

	push(element) {
		this.container.push(element);
	}

	pop(){
		if (isEmpty()) {
			return null;
		}
		return this.container.pop();
	}

	peek() {
		return this.container[this.container.length - 1];
	}

	isEmpty() {
		if (this.container.length == 0) {
			return true;
		}
		return false;
	}
}