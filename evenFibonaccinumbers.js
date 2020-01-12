let n1 = 1;
let n2 = 1;
let n3 = n1 + n2;
let total = 0;

while (n3 < 4000000) {
	if ((n3 % 2) === 0) {
		total += n3;
	}
	n1 = n2;
	n2 = n3;
	n3 = n1 + n2;
}

console.log(`total = ${total}`);