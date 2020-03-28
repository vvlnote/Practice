function add4(a,b,c,d) {
    return a+b+c+d;
}

function add4_curry(a) {
    return function (b){
        return function(c) {
            return function(d){
                return a+b+c+d;
            }
        }
    }
}
let result = add4(1, 2, 3, 4);
console.log(`result of function with multiple of arguments = ${result}`);
// let result = add4_curry(1)(2)(3)(4);
 result = add4_curry(1)(2);
console.log(`result of currying function = ${result}`);
let final = result(3)(4);
console.log(`final = ${final}`);


function add4_partialFun(a) {
    return function add3(b,c,d){
        return a+b+c+d;
    }
}

const add1 = add4_partialFun(1);
result = add1(2,3,4);
console.log(`result of partial function = ${result}`);
