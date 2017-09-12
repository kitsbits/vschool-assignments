// returns sum of 2 numbers
var add = function (a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        console.log("Please enter a number.");
    } else {
        return a + b;
    }
}

console.log(add(1, 2));

// returns biggest of 3 numbers
function biggestNum(a, b, c) {
    if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
        console.log("Please enter a number.");
    } else {
        return Math.max(a, b, c);
    }
}

console.log(biggestNum(1, 100, 4));

// returns "even" or "odd"
var oddOrEven = function (a) {
    if (typeof (a) !== "number") {
        console.log("Please enter a number.");
    }

    if (a % 2 === 0) {
        return "even";
    } else if (a % 2 === 1) {
        return "odd";
    }
}

console.log(oddOrEven(3));

// string thing

function stringThing(string) {
    if (string.length <= 20) {
        return string.concat(string);
    } else if (string.length > 20) {
        return string.substr(0, string.length / 2);
    }
}

console.log(stringThing("this is more than twenty characters"));

// Fibonacci

function fiboThisNacci(n) {

    if (typeof (n) !== "number") {
        return "That is not a number. Please input a number to see the Fibonacci sequence in action!";
    } else if (n <= 1) {
        return "By definition, the first two numbers in the Fibonacci sequence are 1, 1. Please type a number that is 2 or greater to see the sequence in action.";
    } else {
        var fibArray = [1, 1];
        var nextNumber = 0;
        var sumTotal = 2;
        for (var i = 2; i < n; i++) {
            nextNumber = fibArray[i - 1] + fibArray[i - 2];
            sumTotal += fibArray[i - 1] + fibArray[i - 2];
            fibArray.push(nextNumber);
        }
    }

    console.log(fibArray);
    return sumTotal;
}

console.log(fiboThisNacci(10));

// Quadratic equation

var quadraticEquation = function (a, b, c) {

    if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
        return "One of your inputs is not a number. Please only input numbers into this machine, thank you.";
    } else if (a === 0) {
        return "This equation is linear, not quadratic. Please enter a value for 'a' that is not zero.";
    } else {

        var quadArray = [];

        var plusX = (-b + (Math.sqrt(Math.pow(b, 2) - (4 * a * c)))) / (2 * a);
        var minusX = (-b - (Math.sqrt(Math.pow(b, 2) - (4 * a * c)))) / (2 * a);

        //quadArray.push(plusX, minusX);

        var plusXRounded = Number(plusX).toFixed(1);
        var minusXRounded = Number(minusX).toFixed(1);

        quadArray.push(Number(plusXRounded), Number(minusXRounded));
        return quadArray;
    }
}

console.log(quadraticEquation(3, 9, 2));

// Most frequent character in string
//
//function mostFreq (aString) {
//    var aStringsObject = {};
//    
//    for (var i = 0; i < aString.length; i++) {
//        var test = aString[i];    
//        aStringsObject[test] = 0;
//    }
//    
//    for (var i = 0; i < aString.length; i++) {
//        var test = aString[i];
//        if (test === aStringsObject.i) {
//            
//        }
//    }
//    
//    return aStringsObject;
//}
//
//console.log(mostFreq("something"));

var exp = 'abdbbckdbcdbbbbbbjee';
var expCounts = {};
var maxKey = '';
for (var i = 0; i < exp.length; i++) {
    var key = exp[i];
    if (!expCounts[key]) {
        expCounts[key] = 0;
    }
    expCounts[key]++;
    if (maxKey === '' || expCounts[key] > expCounts[maxKey]) {
        maxKey = key;
    }
}

console.log(maxKey + ":" + expCounts[maxKey]);
