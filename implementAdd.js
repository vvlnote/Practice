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
// let result = add4_curry(1)(2)(3)(4);
let result = add4_curry(1)(2);
console.log(`result = ${result}`);
let final = result(3)(4);
console.log(`final = ${final}`);
