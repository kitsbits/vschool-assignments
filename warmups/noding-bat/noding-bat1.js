// sleepin

var sleepIn = function(weekday, vacation){ 
    if (weekday === true && vacation === false) {
        return false;
    } else {
        return true;
    }
}

// diff21

var diff21 = function(n) { 
    if (typeof(n) !== "number") {
        throw Error("Please only type in a number");
    } else if (n > 21) {
        return Math.abs(21 - n) * 2;
    } else {
        return Math.abs(21 - n);
    }
}