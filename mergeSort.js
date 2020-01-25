function mergeSort(unsortedArr) {
	if (unsortedArr == null || unsortedArr.length <= 1) return unsortedArr;

	let m = Math.floor(unsortedArr.length/2);

	let left = (unsortedArr.slice(0, m));
	let right = (unsortedArr.slice(m));

	let sortedArr =  merge(mergeSort(left), mergeSort(right));
	console.log(sortedArr);
	return sortedArr;

}

function merge(left, right) {
	let sortedArr = [];
	let leftIndex = 0;
	let rightIndex = 0;

	while(leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex] < right[rightIndex]) {
			sortedArr.push(left[leftIndex]);
			leftIndex += 1;
		} else {
			sortedArr.push(right[rightIndex]);
			rightIndex += 1;
		}
	}
	return sortedArr.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

let arr = [10, -1, 2, 5, 5, 3, 0, 6, 4, -5, 11];
let sortedArr = mergeSort(arr);
console.log(`Unsorted Arr = ${arr}\n SortedArr = ${sortedArr}`);

arr = [1,1,1,1,1,-1,3];
sortedArr = mergeSort(arr);
console.log(`Unsorted Arr = ${arr}\n SortedArr = ${sortedArr}`);

arr = [1,1,1,2,2];
sortedArr = mergeSort(arr);
console.log(`Unsorted Arr = ${arr}\n SortedArr = ${sortedArr}`);

arr = [2,1,3,1,2];
sortedArr = mergeSort(arr);
console.log(`Unsorted Arr = ${arr}\n SortedArr = ${sortedArr}`);