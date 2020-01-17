let nums = [-1,0,3,5,9,12];
let target = 9;

function binarySearch(nums, targetedNum) {
	nums.sort((a, b) => a-b); //ensure the nums is sorted array
	let leftIndex = 0;
	let rightIndex = nums.length - 1;

	let middleIndex = Math.floor((leftIndex + rightIndex)/2);

	while (rightIndex > leftIndex) {
		if (nums[middleIndex] == targetedNum) {
			return middleIndex;
		} else {
			if (nums[middleIndex] > targetedNum) {
				rightIndex = middleIndex - 1;
			} else {
				leftIndex = middleIndex + 1;
			}
			middleIndex = Math.floor((leftIndex + rightIndex)/2);

		}
	}
	return -1;
}

function binarySearch_recursive(nums, targetdNum) {
	nums.sort((a,b) => a-b);

	function bSearchHelper(nums, l, r, tNum) {
		if (r >= l) {
			let middleIndex = Math.floor((l + r)/2);
			if (nums[middleIndex] == tNum) return middleIndex;
			if (nums[middleIndex] > tNum) {
				r = middleIndex - 1;
			} else {
				l = middleIndex + 1;
			}
			return bSearchHelper(nums, l, r, tNum);			
		}

		return -1;
	}

	return bSearchHelper(nums, 0, nums.length-1, targetdNum);
}
console.log("=".repeat(60));
console.log(`input array = [${nums}], targetNum = ${target}`);
let index = binarySearch(nums, target);
console.log("*".repeat(15) + " Binary Search with Loop " + "*".repeat(15));

console.log(`the index of ${target} is ${index == -1 ? "Not found": index}`);

index = binarySearch_recursive(nums, target);
console.log("*".repeat(15) + " Binary Search recursively " + "*".repeat(15));
console.log(`the index of ${target} is ${index == -1 ? "Not found": index}`);
let nums_1 = [-1,0,3,5,9,12];
let targetNum_1 = 2;

console.log("=".repeat(60));

console.log(`input array = [${nums_1}], targetNum = ${targetNum_1}`);
index = binarySearch(nums_1, targetNum_1);
console.log("*".repeat(15) + " Binary Search with Loop " + "*".repeat(15));
console.log(`the index of ${targetNum_1} is ${index == -1 ? "Not found": index}`);
index = binarySearch_recursive(nums_1, targetNum_1);
console.log("*".repeat(15) + " Binary Search recursively " + "*".repeat(15));
console.log(`the index of ${targetNum_1} is ${index == -1 ? "Not found": index}`);