const printFizzBuzz = () => {
let ans = [];
for (let i = 0; i < 100; i++) {
	let num = i+1;
	if ((num%15) === 0) {
		ans.push('FizzBuzz');
	} else {
		if ((num % 3) === 0) {
			ans.push('Fizz');
		} else if ((num % 5) === 0) {
			ans.push('Buzz');
		} else {
			ans.push(num);
		}
	}
}

console.log(ans);
};

//printFizzBuzz();

const commonDivider = (a, b) => {
	let smallNum = Math.min(a,b);
	let commonDivider = 1;
	for (let i = 1; i <= smallNum; i++){
		if (a%i === 0 && b%i === 0){
			commonDivider = i;
		}
	}
	console.log(`commonDivider = ${commonDivider}`);
}

//commonDivider(20, 30);

const lastKidGetToy = (kids, toys, position) =>{
	// let toyRemainingAmount = toys;
	// let startPosition = position; 

	// while (toyRemainingAmount > 0) {
	// 	if(startPosition > kids) {
	// 		startPosition = 1;
	// 	}
	// 	toyRemainingAmount -= 1;
	// 	startPosition += 1;

	// }

	// startPosition -= 1;
	// if (startPosition === 0) {startPosition = kids;}

	// console.log(startPosition);

	if (kids >= toys) {
		let lastKid = toys + position - 1;
	} else {
		lastKid = toys%kids;
		lastKid += position -1;
	}
	if (lastKid > kids) {
		lastKid = lastKid - kids;
	}
	console.log(lastKid);
}

lastKidGetToy(3,5,1);