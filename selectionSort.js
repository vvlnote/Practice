function selectionSort(arr) {
	console.log(`Unsorted Array = ${arr}`);
	let startingIndex = 0;
	while (startingIndex < arr.length){
		let minIndex = startingIndex;
		for (let i = startingIndex + 1; i < arr.length; i++){
			if (arr[minIndex] > arr[i]) {
				minIndex = i;
			}
		}
		if (minIndex != startingIndex) {
			console.log(`minValueIndex = ${minIndex}, 
				startingIndex = ${startingIndex} `);
			let temp = arr[startingIndex];
			arr[startingIndex] = arr[minIndex];
			arr[minIndex] = temp;
		}
		startingIndex += 1;
	}
	console.log(`Selection Sorting => ${arr}`);
}

let arr = [6,2,4,9,5,1];
selectionSort(arr);

arr = [3, 4, 3, 6, 5, 3];
selectionSort(arr);

arr = [100,99,80,67,53,48,12];
selectionSort(arr);

