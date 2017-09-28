var chai = require("chai");
var assert = chai.assert;

var calculator = require("../calc.js");
var lastNums = require("../lastnums.js");

describe("A calculator", function () {

    it("should add two numbers", function () {
        assert.equal(calculator.add(1, 2), 3);
        assert.equal(calculator.add(1, 2), 3);
    });    
    
    it("should subtract two numbers", function () {
        assert.equal(calculator.sub(1, 2), -1);
        assert.equal(calculator.sub(5, 4), 1);
    });
    
    it("should multiply two numbers", function () {
        assert.equal(calculator.mult(1, 2), 2);
        assert.equal(calculator.mult(5, -4), -20);
    });
    
    it("should divide two numbers", function () {
        assert.equal(calculator.div(1, 2), 0.5);
        assert.equal(calculator.div(5, 5), 1);
        assert.equal(calculator.div(20, -5), -4);
    });

});

describe("Last nums function", function () {
    it("should determine if last two characters of a number are the same", function () {
        assert.equal(lastNums(12, 402), true);
        assert.equal(lastNums(11, 402), false);
        assert.equal(lastNums(15, -5), true);
    });
    
});
