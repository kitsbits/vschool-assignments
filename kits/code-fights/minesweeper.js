const chai = require("chai");
const assert = chai.assert;

// TESTS \\

const tests = {
    one: [[true,false,false],
        [false,true,false],
        [false,false,false]],
    two: [[false,false,false],
         [false,false,false]],
    three: [[true,false,false,true],
         [false,false,true,false],
         [true,true,false,true]]
}

const answers = {
    one: [[1,2,1],
         [2,1,1],
         [1,1,1]],
    two: [[0,0,0],
         [0,0,0]],
    three: [[0,2,2,1],
         [3,4,3,3],
         [1,2,3,1]]
}

describe("#minesweeper", () => {
    it("Should return correct array", () => {
        assert.deepEqual(minesweeper(tests.one), answers.one);
        assert.deepEqual(minesweeper(tests.two), answers.two);
        assert.deepEqual(minesweeper(tests.three), answers.three);
    });
});

function minesweeper(matrix) {
    const returnThisArray = [];
    for (let row = 0; row < matrix.length; row++) {
        const thisRow = matrix[row];
        const hasPrevRow = matrix[row - 1] !== undefined;
        const hasNextRow = matrix[row + 1] !== undefined;

        const pushThisRow = [];
        for (let column = 0; column < thisRow.length; column++) {
            let count = 0;
            const hasPrev = thisRow[column - 1] !== undefined;
            const hasNext = thisRow[column + 1] !== undefined;

            if (hasPrev) {
                if (thisRow[column - 1]) {
                    count++
                }
            }

            if (hasNext) {
                if (thisRow[column + 1]) {
                    count++
                }
            }

            if (hasPrevRow) {
                if (matrix[row - 1][column]) {
                    count++
                }
                if (hasPrev) {
                    if (matrix[row - 1][column - 1]) {
                        count++
                    }
                }
                if (hasNext) {
                    if (matrix[row - 1][column + 1]) {
                        count++
                    }
                }
            }
            if (hasNextRow) {
                if (matrix[row + 1][column]) {
                    count++
                }
                if (hasPrev) {
                    if (matrix[row + 1][column - 1]) {
                        count++
                    }
                }
                if (hasNext) {
                    if (matrix[row + 1][column + 1]) {
                        count++
                    }
                }
            }

            pushThisRow.push(count);
        }
        returnThisArray.push(pushThisRow);
    }
    return returnThisArray;
}

console.log(minesweeper(tests.one));
