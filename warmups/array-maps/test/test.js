const chai = require("chai");
const assert = chai.assert;

const maps = require("../map.js");

const people = [
    {
        name: "Angelina Jolie",
        age: 80
    }, {
        name: "Eric Jones",
        age: 2
    }, {
        name: "Paris Hilton",
        age: 5
    }, {
        name: "Kayne West",
        age: 16
    }, {
        name: "Bob Ziroll",
        age: 100
    }
];

describe("Make doubles", () => {
    it("Should double each number in an array", () => {
        assert.deepEqual(maps.doubleNumbers([2, 5, 100]), [4, 10, 200]);
        assert.deepEqual(maps.doubleNumbers([-1]), [-2]);
    });
    it("Should return an empty array if given an empty array", () => {
        assert.deepEqual(maps.doubleNumbers([]), []);
    });
});

describe("Make strings", () => {
    it("Should make a string out of each number", () => {
        assert.deepEqual(maps.numsToStrings([2, 5, 100]), ["2", "5", "100"]);
    });
});

describe("Array of names", () => {
    it("Should have names only", () => {
        assert.deepEqual(maps.namesOnly(people), ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]);
    });
});

describe("Array detailing who can/can't go to the Matrix", () => {
    it("Should have names and who can/can't go", () => {
        assert.deepEqual(maps.canGo(people), ["Angelina Jolie can go to The Matrix", "Eric Jones is under age!!", "Paris Hilton is under age!!", "Kayne West is under age!!", "Bob Ziroll can go to The Matrix"]);
    });
});

describe("Get ready for the DOM", () => {
    it("Should return H1's and H2's", () => {
        assert.deepEqual(maps.namesToHeaders(people), ["<h1>Angelina Jolie</h1><h2>80</h2", "<h1>Eric Jones</h1><h2>2</h2", "<h1>Paris Hilton</h1><h2>5</h2", "<h1>Kayne West</h1><h2>16</h2", "<h1>Bob Ziroll</h1><h2>100</h2"]);
    });
});
