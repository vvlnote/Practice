class Queue {
	constructor() {
		this.container = [];
	}

	enqueue(element) {
		this.container.push(element);
	}

	dequeue() {
		if (isEmpty()) {
			return null;
		}
		return this.container.shift();
	}

	front() {
		return this.container[0];
	}

	isEmpty() {
		if (this.container.length == 0) {
			return true;
		}
		return false;
	}

	clear() {
		this.container.length = 0;
	}
}

