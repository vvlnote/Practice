let totalSwap = 0;
function countInversions(arr) {
    if (arr == null || arr.length <= 1) return arr;
    console.log(arr);
    let middle = Math.floor(arr.length/2);
    let left = countInversions(arr.slice(0, middle));
    let right = countInversions(arr.slice(middle));

   merge(countInversions(left), countInversions(right));
    return totalSwap;
}   

function merge(left, right) {
    let l = 0;
    let r = 0;
    let sortedArr = [];
    console.log(right);

    while (l < left.length && r < right.length){
        console.log(`totalSwap = ${totalSwap}`);
        if (left[l] > right[r]){
            totalSwap += 1;
            sortedArr.push(right[r]); 
            r += 1;
        } else {
            sortedArr.push(left[l]);
            l += 1;
        }
    }
    return sortedArr.concat(left.slice(l)).concat(right.slice(r));
}


// let arr = [1,1,1,2,2];
// let count = countInversions(arr);
// console.log(`conversion count = ${count}`);
//console.log(`Unsorted Arr = ${arr}\n SortedArr = ${sortedArr}`);
totalSwap = 0;
let arr = [2,1,3,1,2];
let sortedArr = countInversions(arr);
console.log(`conversion count = ${totalSwap}`);
//console.log(`Unsorted Arr = ${arr}\n SortedArr = ${sortedArr}`);