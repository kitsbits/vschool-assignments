const chai = require("chai");
const assert = chai.assert;

const tests = {
    one: [2, 4, 7],
    two: [1, 1, 3, 4],
    three: [23],
    four: [-10, -10, -10, -10, -10, -9, -9, -9, -8, -8, -7, -6, -5, -4, -3, -2, -1, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    five: [-4, -1],
    six: [0, 7, 9],
    seven: [-1000000, -10000, -10000, -1000, -100, -10, -1, 0, 1, 10, 100, 1000, 10000, 100000, 1000000]
}

const answers = {
    one: 4,
    two: 1,
    three: 23,
    four: 15,
    five: -4,
    six: 7,
    seven: 0
}

// describe("#absoluteValuesSumMinimization", () => {
//     it("Should return the correct integer", () => {
//         assert.equal(absoluteValuesSumMinimization(tests.one), answers.one);
//         assert.equal(absoluteValuesSumMinimization(tests.two), answers.two);
//         assert.equal(absoluteValuesSumMinimization(tests.three), answers.three);
//         assert.equal(absoluteValuesSumMinimization(tests.four), answers.four);
//         assert.equal(absoluteValuesSumMinimization(tests.five), answers.five);
//         assert.equal(absoluteValuesSumMinimization(tests.six), answers.six);
//         assert.equal(absoluteValuesSumMinimization(tests.seven), answers.seven);
//     });
// });

function absoluteValuesSumMinimization(a) {
    let lowestSum = Infinity;
    let whichValue;
    function testAbsValuesSum(numToTest) {
        let sum = 0;
        a.forEach(num => {
            sum += Math.abs(num - numToTest);
        });
        return sum;
    }

    for (let index in a) {
        const absValuesSum = testAbsValuesSum(a[index]);
        if ( absValuesSum < lowestSum) {
            lowestSum = absValuesSum;
            whichValue = a[index];
        }
    }
    return whichValue;
}

console.log(absoluteValuesSumMinimization(tests.one));
