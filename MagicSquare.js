let n = 3;

function constructionMagicSquare(n) {
	let magicSquare = initializeMatrix(n);
	// if (n % 2 != 0) {
	// 	if (n == 3) {
 		magicSquare = magicSquare3x3(n, magicSquare)
	// 	} else {
	// 		oddNumberMagicSquare(n, magicSquare);			
	// 	}
	// } else {
	// 	evenNumberMagicSquare(n, magicSquare);
	// }
	printOutMagicSquare(magicSquare);
}

function magicSquare3x3(n, magicSquare) {
	let i = 1;
	let currentRow = 0;
	let currentCol = 1;
	while (i <= n*n) {
		if (i == 1) {
			//start to create a magicSquare 3x3
			//this starting number should be placed in the row = 0, column = 1
			magicSquare[currentRow][currentCol] = 1;
		} else {
			let nextRow = currentRow - 1;
			let nextCol = currentCol + 1;

			if (nextRow >= 0) {
				if (nextCol < n) {
					if (magicSquare[nextRow][nextCol] != 0) {
						//next cell is occupied
						currentRow += 1;
					} else {
						currentRow -= 1;
						currentCol += 1;
					}
				} else {
					currentCol = 0;
					currentRow -= 1;
				}
			} else if (nextRow < 0) {
				if (nextCol < n) {
					currentRow = n-1;
					currentCol += 1;
				} else {
					currentRow += 1;
				}
			}
			magicSquare[currentRow][currentCol] = i;
		}

		i += 1;
	}
	return magicSquare;
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