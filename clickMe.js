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


function clickMeNestedFun(msg) {
    let count = 0;
    function clickCount() {
        console.log(`${msg} has been click ${count+1}`);
    }
    clickCount();
}

clickMeNestedFun(`clickMeNestedFun button`);
clickMeNestedFun(`clickMeNestedFun button`);
clickMeNestedFun(`clickMeNestedFun button`);

function clickMeState(count){
    let temp = count;
    return function(){
        temp += 1;
        return temp;
    }
}

function clickMeState_1(){
    let count = 0;
    return function(){
        return ++count;
    }
}
let clickState = clickMeState_1();
clickState();
clickState();
clickState();
console.log(`the total click count = ${clickState()}`);
