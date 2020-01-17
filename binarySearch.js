let nums = [-1,0,3,5,9,12];
let target = 9;

function binarySearch(nums, targetedNum) {
	nums.sort((a, b) => a-b); //ensure the nums is sorted array
	let leftIndex = 0;
	let rightIndex = nums.length - 1;

	let middleIndex = Math.floor((leftIndex + rightIndex)/2);

	while (rightIndex > leftIndex) {
		console.log(`leftIndex = ${leftIndex}, middleIndex = ${middleIndex}, rightIndex = ${rightIndex}`);
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
console.log(`input array = [${nums}], targetNum = ${target}`);
let index = binarySearch(nums, target);
console.log(`the index of ${target} is ${index == -1 ? "Not found": index}`);
let nums_1 = [-1,0,3,5,9,12];
let targetNum_1 = 2;

console.log("*".repeat(20));

console.log(`input array = [${nums_1}], targetNum = ${targetNum_1}`);
index = binarySearch(nums_1, targetNum_1);
console.log(`the index of ${targetNum_1} is ${index == -1 ? "Not found": index}`);