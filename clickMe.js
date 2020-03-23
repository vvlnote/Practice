function clickMe(msg) {
    console.log(`click me with ${msg}`);
    let count = 0;
    function clickCount() {
        count += 1;
    }
    clickCount();
    return count;
}

let  clickMeClosure = (function(msg){
    let count = 0;
    return function() {
       console.log(`this button has been clicked ${++count} times`);
    }
})();

clickMeClosure();
clickMeClosure();
clickMeClosure();


