class numberConvertToTenBase {
    constructor(originBase) {
        this.originBase = originBase;
    }
    numberToConvert(arr){
        if (arr.filter((num) => num >= this.originBase).length > 0) {
            return undefined;
        } else {
            let number = arr[0]
            for (let i = 1; i < arr.length; i ++){
                // console.log(`beginning number = ${number}`);
                number = (number * this.originBase) + arr[i];
                // console.log(`ending number = ${number}, arr[${i}] = ${arr[i]}`);
            }
            return number;
        }
    }
}

let number3Base = new numberConvertToTenBase(3);
let result = number3Base.numberToConvert([1, 0, 0, 1, 1, 2, 0, 2]);
console.log(`result = ${result}`);

function numConvertToTenBase(originBase) {
    return function(arr) {
        if (arr.filter((num) => num >= originBase).length > 0) {
            return undefined;
        } else {
            let number = arr[0]
            for (let i = 1; i < arr.length; i ++){
                // console.log(`beginning number = ${number}`);
                number = (number * originBase) + arr[i];
                // console.log(`ending number = ${number}, arr[${i}] = ${arr[i]}`);
            }
            return number;
        }
    }
}

let numConvertToTenBaseFrom3Base = numConvertToTenBase(3);
let number = numConvertToTenBaseFrom3Base([1, 2, 3, 1, 1, 0, 3, 0]);
console.log(`number = ${number}`);