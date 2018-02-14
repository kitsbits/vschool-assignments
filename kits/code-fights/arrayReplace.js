const chai = require("chai");
const assert = chai.assert;

// TESTS \\
const tests = {
    one: [[1, 2, 1], 1 , 3],
    two: [[1, 2, 3, 4, 5], 3, 0],
    three: [[1, 1, 1], 1, 10]
}

const answers = {
    one: [3, 2, 3],
    two: [1, 2, 0, 4, 5],
    three: [10, 10, 10]
}

function arrayReplace(inputArray, elemToReplace, substitutionElem) {
    const toReplace = new RegExp(elemToReplace, "g");
    return inputArray.join(" ").replace(toReplace, substitutionElem).split(" ").map(each => +each);
}

describe("#arrayReplace", () => {
    it("Should return correct array", () => {
        assert.deepEqual(arrayReplace(...tests.one), answers.one);
        assert.deepEqual(arrayReplace(...tests.two), answers.two);
        assert.deepEqual(arrayReplace(...tests.three), answers.three);
    });
});
