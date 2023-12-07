const sumAll = function (x, y) {
    if (x < 0 || y < 0) {return "ERROR"}
    if (typeof x != "number" || typeof y != "number") {return "ERROR"}
    let sum = 0
    // this if statement in case x is bigger than y
    if (x > 0 && x > y){
        for (let i = y; i <= x; i++) {
            sum += i
        }
    }
    if (y > 0 && y > x) {
       for (let i = x; i <= y; i++) {
            sum += i
        } 
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
