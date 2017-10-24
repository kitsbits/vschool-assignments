const chai = require("chai");
const assert = chai.assert;

const twoSum = require("../main.js");

describe("Return the indicies of two numbers in an array that sum to a given value", () => {
    it("should return an array with the indicies of the values that add up to the target", () => {
        assert.deepEqual(twoSum([2, 7, 11, 15], 9), [0, 1]);
    });
    it("should still work when two numbers are not next to each other", () => {
        assert.deepEqual(twoSum([2, 11, 7, 15], 9), [0, 2]);
    });
})
