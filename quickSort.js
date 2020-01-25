function quickSort_recursive(arr){
	if (arr == null || arr.length <= 1) return arr;

	let left = [];
	let right = [];
	let newArr = [];
	let pivot = arr.pop();

	for (let i = 0; i < arr.length; i++){
		if (arr[i] > pivot) {
			right.push(arr[i]);
		} else {
			left.push(arr[i]);
		}
	}

	return newArr.concat(quickSort_recursive(left), pivot, quickSort_recursive(right));
}


let arr = [3,0,2,5,-1, 4, 1];
let sortedArr = quickSort_recursive(arr);

console.log(`original arr = ${arr}, sorted arr = ${sortedArr}`);