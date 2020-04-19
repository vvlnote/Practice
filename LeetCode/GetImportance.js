var GetImportance = function(employees, id) {
    function addSubordinates(subordinates, stack) {
        for (let i = 0; i < subordinates.length; i++)
            stack.push(subordinates[i]);
    }
    
    let employeeMap = new Map();
    for (let i = 0; i < employees.length; i++) {
        let obj = {};

        obj.importance = employees[i].importance;
        obj.subordinates = employees[i].subordinates;
        employeeMap.set(employees[i].id, obj);
    }
    let stack = [];
    let ans = 0;
    let currentId = id;
    do {
        let obj = employeeMap.get(currentId);
        ans += obj.importance;
        addSubordinates(obj.subordinates, stack);
        if (stack.length > 0) {
            currentId = stack.pop();
        } else {
            break;
        }
    } while(stack.length >= 0)
    return ans;
};