const chai = require("chai");
const assert = chai.assert;

arr1 = [1, 2, 3];
arr2 = [2, 3, 4];
arr3 = [1, 2, 3];
arr4 = [1, 2, 3];

findTheDiff = require("../app");

describe("Find the difference", () => {
    it("Should find the elements in each array that are different from the other array", () => {
        assert.deepEqual(findTheDiff(arr1, arr2), [1, 4]);
        assert.deepEqual(findTheDiff(arr3, arr4), []);
    });
});
