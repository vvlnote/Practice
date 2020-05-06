/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
 //more organized way to implement
    let match = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    };
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (match[s[i]] !== undefined) {
            stack.push(s[i]);
        } else {
            let temp = stack.pop();
            if (match[temp] !== s[i]) {
                return false;
            }
        }
    }
    return stack.length === 0 ? true : false;
    
//intuitive way to implement
    // let stack = [];
    // let found = false;
    // if (s.length == 0) return true;
    // for (let i = 0; i < s.length; i++) {
    //     switch(s[i]) {
    //         case '(' :
    //             stack.push(s[i]);
    //             break;
    //         case ')':
    //             if (stack.pop() == '(') {
    //                 found = true;
    //             } else {
    //                 return false;
    //             }
    //             break;
    //         case '{':
    //             stack.push(s[i]);
    //             break;
    //         case '}':
    //             if (stack.pop() == '{') {
    //                 found = true;
    //             } else {
    //                 return false;
    //             }
    //             break;
    //         case '[':
    //             stack.push(s[i]);
    //             break;
    //         case ']':
    //             if (stack.pop() == '[') {
    //                 found = true;
    //             } else {
    //                 return false;
    //             }
    //         default:
    //             break;
    //     }
    // }
    // if (stack.length != 0) return false;
    // return found;
};