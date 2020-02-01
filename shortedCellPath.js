//mocw up, move right, move down, move left
let rowNum = [-1, 0, 1, 0];
let colNum = [0, 1, 0, -1]

function shortestCellPath(grid, sr, sc, tr, tc) {
	/**
	@param grid: integer[][]
	@param sr: integer
	@param sc: integer
	@param tr: integer
	@param tc: integer
	@return: integer
	*/

	if (!grid[sr][sc] || !grid[tr][tc] ) {
		return -1;
	}
	let totalSteps = 0;
	let currentR = sr;
	let currentC = sc;
	let q = [];
	let qNode = {
		r: sr,
		c: sc,
		d: 0
	};
	q.push(qNode);
	grid[sr][sc] = 'x';


	while (q.length > 0) {
		currentNode = q.shift();
		console.log(`current r = ${currentNode.r}. c = ${currentNode.c}, distance = ${currentNode.d}`);
		if ((currentNode.r == tr) && (currentNode.c == tc)) {
			return currentNode.d;
		}

		for (let i = 0; i < rowNum.length; i ++) {
			let nextR = currentNode.r + rowNum[i];
			let nextC = currentNode.c + colNum[i];
			console.log(`nextR = ${nextR}, nextC = ${nextC}`);
			if (isValid(grid.length, grid[0].length, nextR, nextC) && grid[nextR][nextC] == 1) {
				console.log('add to the queue');
				grid[nextR][nextC] = 'x';
				qNode = {
					r: nextR,
					c: nextC,
					d: currentNode.d + 1
				}
				q.push(qNode);
			}
		}
	}
	return -1;
}

function isValid(ROW, COL, r, c){
	console.log(`ROW = ${ROW}, COL = ${COL}, r = ${r}, c = ${c}`);
	if ((r >= 0) && (r < ROW) && (c >=0) && (c < COL)){
		console.log('true')
		return true;
	}
	console.log('false');
	return false;
}

let grid = [[1, 1, 1, 1], [0, 0, 0, 1], [1, 1, 1, 1]];
let sr = 0;
let sc = 0;
let tr = 2;
let tc = 0;

console.log(`total steps = ${shortestCellPath(grid, sr, sc, tr, tc)}`);


grid = [[1, 1, 1, 1], [0, 0, 0, 1], [1, 0, 1, 1]];
sr = 0;
sc = 0;
tr = 2;
tc = 0;

console.log(`total steps = ${shortestCellPath(grid, sr, sc, tr, tc)}`);