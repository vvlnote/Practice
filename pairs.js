function pairs(k, arr) {

    //let sortedArr = mergeSort(arr);
    let sortedArr = quickSort(arr);
    let i = 0;
    let j = i + 1;

    let total = 0;

    while (i < sortedArr.length && j < sortedArr.length) {
    	let diff = sortedArr[i] - sortedArr[j]; 
    	console.log(`diff = ${diff}, i = ${i}, j = ${j}`);
    	if (diff == k){
    		total += 1;
    		i += 1;
    		j = i+1;
    	} else if (diff < k) {
    		j += 1;
    	} else {
    		i += 1;
    		j = i+1;
    	}
    }

    console.log(`total = ${total}`);

}

function mergeSort(arr) {
	if (arr == null || arr.length <= 1 ) {
		return arr;
	}
	let middle = Math.floor(arr.length /2);
	let left = arr.slice(0, middle);
	let right = arr.slice(middle);
	console.log(`right = ${right}`);

	return merge(mergeSort(left), mergeSort(right));
}

function merge(a, b) {
	let arr = [];
	let ai = 0;
	let bi = 0;
	console.log(`a = ${a}, b = ${b}`);
	while(ai < a.length && bi < b.length) {
		if (a[ai] > b[bi]){
			arr.push(a[ai]);
			ai += 1;
		} else {
			arr.push(b[bi]);
			bi += 1;
		}
	}

	return arr.concat(a.slice(ai)).concat(b.slice(bi));

}

function quickSort(arr) {
	if (arr == null || arr.length <= 1) return arr;

	let left = [];
	let right = [];
	let sortedArr = [];
	let pivot = arr.pop();

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > pivot) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}
	return sortedArr.concat(quickSort(left), pivot, quickSort(right));
}


let k = 2;
let arr = [1,5,3,4,2];
pairs(k, arr);
