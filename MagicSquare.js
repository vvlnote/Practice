let n = 3;

//let magicSquare = initializeMatarix(n);

function constructionMagicSquare(n) {
	let magicSquare = initializeMatrix(n);
	// if (n % 2 != 0) {
	// 	if (n == 3) {
	// 		magicSquare = magicSquare3x3(n, magicSquare)
	// 	} else {
	// 		oddNumberMagicSquare(n, magicSquare);			
	// 	}
	// } else {
	// 	evenNumberMagicSquare(n, magicSquare);
	// }
	printOutMagicSquare(magicSquare);
}

function magicSquare3x3(n, magicSquare) {

}

function initializeMatrix(n){
	return new Array(n).fill(0).map(()=> new Array(n).fill(0));
}

function printOutMagicSquare(magicSquare) {
	for (let i = 0; i < magicSquare.length; i++) {
		let str = "";
		for (let j = 0; j < magicSquare[i].length; j++) {
			str += magicSquare[i][j].toString();
			str += "  ";
		}
		console.log(`${str}`);
	}
}

constructionMagicSquare(n);