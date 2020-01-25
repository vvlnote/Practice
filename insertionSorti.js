// function insertionSort(arr) {
// 	if (arr == null || arr.length <= 1) return arr;

// 	console.log(`unsorted array = ${arr}`);


// 	for (let i = 1; i < arr.length; i++){
// 		let currentIndex = i;
// 		let currentValue = arr[currentIndex];
// 		let j = 0;
// 		while(arr[j] < currentValue &&  j < currentIndex){
// 			j += 1;
// 		}
// 		if (j < currentIndex) {
// 			for (let k = currentIndex; k > j; k--) {
// 				arr[k] = arr[k-1];
// 			}
// 			arr[j] = currentValue;
// 		}
// 	}
// 	console.log(`sorted array = ${arr}`);
// }

//optimize
function insertionSort(arr) {
	if (arr == null || arr.length <= 1) return arr;

	console.log(`unsorted array = ${arr}`);


	for (let i = 1; i < arr.length; i++){
		let currentIndex = i;
		let currentValue = arr[currentIndex];
		let j = i - 1;
		while(j >= 0 &&  arr[j] > currentValue){
			arr[j+1] = arr[j];
			j -= 1;
		}
		arr[j+1] = currentValue;
	}
	console.log(`sorted array = ${arr}`);
}

let arr = [4, 7, 3, 5, 1];

insertionSort(arr);

arr = [5,3,1,4,6];

insertionSort(arr);

arr = [1,2,3,4,5,6];
insertionSort(arr);

arr = [8,7,5,3,2,1,-1];
insertionSort(arr);