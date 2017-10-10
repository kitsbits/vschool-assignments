const chai = require("chai");
const assert = chai.assert;

const nCopies = require("../main.js");

describe("Return copies of first 3 chars", () => {
    it("should return n copies of the first 3 chars", () => {
        assert.equal(nCopies("abcworking?", 3), "abcabcabc");
    });
    it("shouldn't break if there are less than 3 chars in the string", () => {
        assert.equal(nCopies("1", 5), "11111");
        assert.equal(nCopies("", 10), "");
    });
    it("shouldn't break if there are only spaces or special characters", () => {
        assert.equal(nCopies("     ", 1), "   ");
        assert.equal(nCopies("!", 3), "!!!");
    });
});
