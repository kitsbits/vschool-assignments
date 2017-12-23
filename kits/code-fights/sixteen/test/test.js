const chai = require("chai");
const assert = chai.assert;

const similarSolver = require("../sixteen");

const swapPlaces = similarSolver.swapPlaces;
const areSimilar = similarSolver.areSimilar;

let a = [1, 2, 3];
const swappedAOne = [2, 1, 3];
const swappedATwo = [1, 3, 2];

const tests = {
    one: {
        a: [832, 998, 148, 570, 533, 561, 894, 147, 455, 279],
        b: [832, 570, 148, 998, 533, 561, 455, 147, 894, 279],
        output: false
    },
    two: {
        a: [2, 3, 1],
        b: [1, 3, 2],
        output: true
    },
    three: {
        a: [1, 2, 2],
        b: [2, 1, 1],
        output: false
    },
    four: {
        a: [832, 998, 148, 570, 533, 561, 894, 147, 455, 279],
        b: [832, 998, 148, 570, 533, 561, 455, 147, 894, 279],
        output: true
    },
    five: {
        a: [1, 2, 3],
        b: [1, 2, 3],
        output: true
    }
}

describe("Code Fights Arcade 16: Are Similar?", () => {
    // describe("#swapPlaces()", () => {
    //     it("Should swap indices of given elements in a given array", () => {
    //         assert.deepEqual(swapPlaces(a, 0, 1), swappedAOne);
    //         assert.equal(swapPlaces(a, 0, 1)[0], 2);
    //         assert.deepEqual(swapPlaces(a, 1, 2), swappedATwo);
    //         assert.equal(swapPlaces(a, 1, 2)[0], 1);
    //     });
    // });
    describe("#areSimilar()", () => {
        it("Should return true/false if given arrays are/are not similar", () => {
            assert.isFalse(areSimilar(tests.one.a, tests.one.b));
            assert.isFalse(areSimilar(tests.three.a, tests.three.b));
            assert.isTrue(areSimilar(tests.two.a, tests.two.b));
            assert.isTrue(areSimilar(tests.four.a, tests.four.b));
            assert.isTrue(areSimilar(tests.five.a, tests.five.b));
        });
    });
});
