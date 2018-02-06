const tests = {
    one: [10, 15, 15, 10], // true
    three: [10, 15, 15, 9], // false
    five: [10, 15, 5, 20], // false
    seven: [5, 20, 20, 5], // true
    eleven: [5, 5, 10, 10] // false
}

// Call two arms equally strong if the heaviest weights they each are able to lift are equal.

// Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left), and so are their weakest arms.

function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    if ((yourLeft === friendsLeft || yourLeft === friendsRight) && (yourRight === friendsRight || yourRight === friendsLeft)) {
        return true;
    }
    return false;
}


console.log(areEquallyStrong(...tests.one));
console.log(areEquallyStrong(...tests.three));
console.log(areEquallyStrong(...tests.five));
console.log(areEquallyStrong(...tests.seven));
console.log(areEquallyStrong(...tests.eleven));
