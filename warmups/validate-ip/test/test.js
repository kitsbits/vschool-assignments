var chai = require("chai");
var assert = chai.assert;

var validIp = require("../app.js");

describe("Checks string to determine if it's a valid IP address", () => {
    it ("Should make sure all characters are numbers or dots", () => {
        assert.isFalse(validIp("x.12.12.1000"));
        assert.isFalse(validIp("!.12.12.1000"));
    });
    
    it ("Should make sure all numbers are between 0 and 255", () => {
        assert.isTrue(validIp("12.12.12.1"));
        assert.isFalse(validIp("12.12.12.1000"));
        assert.isFalse(validIp("-12.12.12.1"));
    });
    
    it ("Should make sure order is: num.num.num.num", () => {
        assert.isTrue(validIp("12.12.12.1"));
        assert.isFalse(validIp("12.12.1"));
        assert.isFalse(validIp("12.12.1.12.12.12.12"));
    });
    
    
});