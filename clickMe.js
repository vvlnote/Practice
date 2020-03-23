function clickMe(msg) {
    let count = 0;
    return function(){
        count += 1;
        console.log(`${msg} has been click ${count}`);
    }
}

let  clickMeClosure = (function(){
    let count = 0;
    return function() {
       console.log(`this button has been clicked ${++count} times`);
    }
})();

// clickMeClosure();
// clickMeClosure();
// clickMeClosure();

let click = clickMe(`clickMe button`);
click();
click();
click();

let warnUser = function(msg) {
    let calledCount = 0;
    return function() {
        calledCount += 1;
        console.log(`${msg} you have been warned ${calledCount} times`);
    }
}
let warnForTamper = warnUser(`Hello!`);
warnForTamper();
warnForTamper();

