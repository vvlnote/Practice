function sumFibs(num){
	let fibsArr = buildFibsArr(num);
	//console.log(fibsArr);
	let sum = 0;
	for (let i = 0; i < num; i ++) {
		if (fibsArr[i] % 2 == 1){
			sum += fibsArr[i];
		}
	}
	console.log(`sum of Odd Fib numbers = ${sum}`);

}

function buildFibsArr(num) {
	if (num == 0) {
		return [];
	}
	if (num == 1) {
		return [1];
	}
	if (num == 2) {
		return [1,1];
	}

	// console.log(`num = ${num}`);
	let n1 = 1;
	let n2 = 1;
	let arr = [n1, n2];

	while(true) {
		let n3 = n1 + n2;
		if (n3 <= num) {
			arr.push(n3);
			n1 = arr[arr.length-2];
			n2 = arr[arr.length-1];			
		} else {
			break;
		}
		// console.log(`n1 = ${n1}, n2 = ${n2}`);
	}
	return arr;
}

// sumFibs(1);
// sumFibs(1000);
// sumFibs(4000000);
// sumFibs(4);
sumFibs(75024);
sumFibs(75025);