const tests = {
    one: 248622, // true
    two: 642386, // false
    six: 2462487, // false
    ten: 7468428, // false
}

function evenDigitsOnly(n) {
    return n.toString().split("").every(element => {
        return +element % 2 === 0;
    });
}

// console.log(evenDigitsOnly(tests.one));
// console.log(evenDigitsOnly(tests.two));
console.log(evenDigitsOnly(tests.six));
// console.log(evenDigitsOnly(tests.ten));
