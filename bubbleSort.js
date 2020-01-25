function bubbleSort(unsortedArr) {
	console.log(`unsorted Arr = ${unsortedArr}`);
	let swap = false;
	let iteration = 0;

	for (let i = 0; i < unsortedArr.length - 1; i ++) {
		for (let j = 0; j < unsortedArr.length; j ++) {
			if (unsortedArr[j] > unsortedArr[j+1]) {
				swap = true;
				let temp = unsortedArr[j];
				unsortedArr[j] = unsortedArr[j+1];
				unsortedArr[j+1] = temp;
			}			
		}
		iteration += 1;
	}
	console.log(`iteration = ${iteration}, sortedArr = ${unsortedArr}`);
}

let arr = [5,3,1,4,6];

bubbleSort(arr);

arr = [11,20,23, 34, 35, 47, 48, 67];

bubbleSort(arr);

arr = [99, 98, 97, 96, 95, 43];

bubbleSort(arr);