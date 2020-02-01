//this is BFS

var floodFill = function (image, sr, sc, newColor) {
	if (image == null) return image;
	let rowNum = [-1, 0, 1, 0];
	let colNum = [0, 1, 0, -1];

	let queue = [];
	let qNode = {
		r: sr,
		c: sc
	};

	queue.push(qNode);
	let origColor = image[sr][sc];
	console.log(`origColor = ${origColor}`);
	image[sr][sc] = newColor;


	while(queue.length > 0) {
		let currentNode = queue.shift();
		for (let i = 0; i < rowNum.length; i ++) {
			let nextR = currentNode.r + rowNum[i];
			let nextC = currentNode.c + colNum[i];
			console.log(`currentR = ${currentNode.r},  currentC = ${currentNode.c}`);
			console.log(`nextR = ${nextR}, nextC = ${nextC}`);
			if ((isValid(image.length, image[0].length, nextR, nextC)) && image[nextR][nextC] == origColor) {
				image[nextR][nextC] = newColor;
				qNode = {
					r: nextR,
					c: nextC
				};
				queue.push(qNode);
			}
		}
	}
	printOutImage(image);
	return image;
}

function isValid(ROW, COL, r, c) {
	if ((r >= 0) && (r < ROW) && (c >= 0) && (c <COL)) {
		return true;
	}
	return false;
}

function printOutImage(image) {
	let str = "";
	for (let i = 0; i < image.length; i ++) {
		for (let j = 0; j < image[i].length; j++) {
			str += (`${image[i][j]} `);
		}
		console.log(str);
		str = '';
	}
}

let image = [[1,1,1],[1,1,0],[1,0,1]];
let sr = 1;
let sc = 1;
let newColor = 2;

floodFill(image, sr, sc, newColor);
