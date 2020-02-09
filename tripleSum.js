function tripleSum(a, b, c){
	if (a == null) return 0;
	if (b == null) return 0;
	if (c == null) return 0;

	let sortedA = a.sort((x, y) => x - y);
	let sortedB = b.sort((x, y) => x - y);
	let sortedC = c.sort((x, y) => x - y);

	//console.log(sortedA, sortedB, sortedC);
	let ai = 0;
	let bi = 0;
	let ci = 0;
	let total = 0;

	while(bi < sortedB.length){
		if (sortedB[bi -1] != sortedB[bi]){
			ai = 0; 
			ci = 0;
			while(sortedA[ai] <= sortedB[bi] && ai < sortedA.length){
				ai += 1;
			}
			while(sortedC[ci] <= sortedB[bi] && ci < sortedC.length){
				ci += 1;
			}
			console.log(`ai = ${ai}, ci = ${ci}, num = ${sortedB[bi]}`);
			total += ai * ci;			
		}

		bi += 1;
	}
	return total;
}

let a = [1,3,5];
let b = [2,3];
let c = [1,2,3];

console.log(tripleSum(a, b, c));


a = [1,4,5];
b = [2,3,3];
c = [1,2,3];

console.log(tripleSum(a, b, c));

a = [1,3,5, 7];
b = [5,7,9];
c = [7,9,11,13];

console.log(tripleSum(a, b, c));