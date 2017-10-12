const chai = require("chai");
const assert = chai.assert;

const areBalanced = require("../main.js");

describe("Are parenthese balanced?", () => {
    it("Should return true if even number of open/closing parentheses", () => {
        assert.isTrue(areBalanced("()()"));
        assert.isTrue(areBalanced("(())"));
    });
    it("Should return false if odd number of open/closing parentheses", () => {
        assert.isFalse(areBalanced("()))"));
        assert.isFalse(areBalanced("("));
    });
    it("Should return false if each closing doesn't have an opening partner before it", () => {
        assert.isFalse(areBalanced(")()("));
        assert.isFalse(areBalanced("())("));
    });
})
