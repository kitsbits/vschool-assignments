const chai = require("chai");
const assert = chai.assert;

findLongestCombined = require("../main.js");

describe("Find 3 adjacent elements with longest string", () => {
    it("should find 3 longest adjacent elements", () => {
        assert.notDeepEqual(findLongestCombined(["this", "a", "an", "array"]), ["this", "an", "array"]);
        assert.deepEqual(findLongestCombined(["this", "a", "an", "array"]), ["a", "an", "array"]);
        assert.deepEqual(findLongestCombined(["is", "an", "array", "something", "something else", "another thing", "more things", "in", "this", "array"]), ["something else", "another thing", "more things"]);

    });
})
