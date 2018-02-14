const chai = require("chai");
const assert = chai.assert;

const tests = {
    one: [[1,1,1],
        [1,7,1],
        [1,1,1]],
    two: [[0,18,9],
        [27,9,0],
        [81,63,45]],
    three: [[36,0,18,9],
         [27,54,9,0],
         [81,63,72,45]],
    four: [[7,4,0,1],
         [5,6,2,2],
         [6,10,7,8],
         [1,4,2,0]],
    five: [[36,0,18,9,9,45,27],
         [27,0,54,9,0,63,90],
         [81,63,72,45,18,27,0],
         [0,0,9,81,27,18,45],
         [45,45,27,27,90,81,72],
         [45,18,9,0,9,18,45],
         [27,81,36,63,63,72,81]]
}

function boxBlur(image) {
    const columns = (image.length - 3) + 1;
    const rows = (image[0].length - 3) + 1;

    const returnArray = [];

    for (let i = 0; i < columns; i++) {
        const row = []
        for (let j = 0; j < rows; j++) {
            const row1 = image[i];
            const row2 = image[i+1];
            const row3 = image[i+2];
            const sumTotal = row1[j] + row1[j+1] + row1[j+2] + row2[j] + row2[j+1] + row2[j+2] + row3[j] + row3[j+1] + row3[j+2];
            const average = Math.floor( sumTotal / 9);
            row.push(average);
        }
        returnArray.push(row);
    }
    return returnArray;
}

// boxBlur(tests.one);
boxBlur(tests.three);
// boxBlur(tests.four);
// boxBlur(tests.five);


const answers = {
    one: [[1]],
    two: [[28]],
    three: [[40,30]],
    four: [[5,4],
         [4,4]],
    five: [[39,30,26,25,31],
         [34,37,35,32,32],
         [38,41,44,46,42],
         [22,24,31,39,45],
         [37,34,36,47,59]],
}

describe("#blurbox", () => {
    it("Should return correct array", () => {
        assert.deepEqual(boxBlur(tests.one), answers.one);
        assert.deepEqual(boxBlur(tests.two), answers.two);
        assert.deepEqual(boxBlur(tests.three), answers.three);
        assert.deepEqual(boxBlur(tests.four), answers.four);
        assert.deepEqual(boxBlur(tests.five), answers.five);
    });
})

module.exports = boxBlur;
