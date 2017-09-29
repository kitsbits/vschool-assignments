var chai = require("chai");
var assert = chai.assert;

var isPalindrome = require("../finder.js");

describe("A palindrome finder", function () {

    it("finds characters that are the same backwards and forwards", function () {
        assert.isFalse(isPalindrome("palindrome"));
        assert.isTrue(isPalindrome("I madam, I made radio! So I dared! Am I mad?? Am I?!"));

    });

    it("is not case sensitive", function () {
         assert.isTrue(isPalindrome("StArRats!"));

    });
    
    it("ignores letters, special characters", function () {
         assert.isTrue(isPalindrome("I madam, I made radio! So I dared! Am I mad?? Am I?!"));

    });
    
});
