function indexEqualsValueSearch(arr) {
  if (arr == null || arr.length < 1) return -1;
  if (arr.length == 1) {
    if (arr[0] == 0) {
      return 0;
    } else {
      return -1;
    }
  }
  let index = binarySearch(arr, 0, arr.length - 1);
  console.log(`index = ${index}`);
  
  //return binarySearch(arr);
}

function binarySearch(arr, l, r) {
  if (l < r) {
     let middle =  l + Math.floor((r - l)/2);
     if (arr[middle] == middle) return middle;
     if ((arr[middle] - middle) > 0) {
        return binarySearch(arr, l, middle);
     } else {
        return binarySearch(arr, middle +1, r);
     }
  }
  if (l == r && arr[l] == l) {
    return l;
  }

  return -1;

}


let arr = [0, 3];
indexEqualsValueSearch(arr);

arr = [-6,-5,-4,-1,1,3,5,7];
indexEqualsValueSearch(arr);

arr = [-5,0,3,4,10,18,27];
indexEqualsValueSearch(arr);