// We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if
// each is smiling. We are in trouble if they are both smiling or if neither of
// them is smiling. Return true if we are in trouble.

// works
var monkeyTrouble = function(aSmile, bSmile) { 
    if ((aSmile && bSmile) || (!aSmile && !bSmile)) {
        return true;
    } else {
        return false;
    }
};

// better
var monkeyTrouble = function(aSmile, bSmile) { 
    if (aSmile === bSmile) {
        return true;
    } else {
        return false;
    }
};

// best
var monkeyTrouble = function(aSmile, bSmile) { 
    return aSmile === bSmile;
};