const fibRecursive = function(n){
    if (n <= 2) return 1;
    return (fibRecursive(n-1) + fibRecursive(n-2)); 
}

console.log(fibRecursive(6));

const fibMemoz = function(n){
    let arr = new Array(n + 1).fill(null);
    function fibMemozHelper(n){
        if (arr[n] !== null) {
            return arr[n];
        } else {
            if(n <= 2) {
                arr[n] = 1;
                return 1;
            } else {
                let result = fibMemozHelper(n-1) + fibMemozHelper(n-2);
                arr[n] = result;
                return result;
            }
        }
    }
    let result = fibMemozHelper(n);
    return result;
}

console.log(fibMemoz(6));

const fibButtomUp = function(n){
    let arr = new Array(n+1).fill(null);
    arr[1] = 1;
    arr[2] = 1;

    for (let i = 3; i <=n; i++){
        arr[i] = arr[i-1] + arr[i-2];
    }

    return arr[n];
}

console.log(fibButtomUp(6));