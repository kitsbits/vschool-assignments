const tests = {
    one: [1, 1, 1], // 3
    two: [-1000, 0, -2, 0], // 5
    three: [2, 1, 10, 1], // 12
    four: [2, 3, 3, 5, 5, 5, 4, 12, 12, 10, 15], // 13
};

function arrayChange(inputArray) {
    let count = 0;
    for (let i = 0; i < inputArray.length - 1; i++) {
        if (inputArray[i+1] - inputArray[i] < 1) {
            const movesNeeded = Math.abs(inputArray[i+1] - inputArray[i]) + 1;
            count += movesNeeded;
            inputArray[i+1] = inputArray[i+1] + movesNeeded;
        }
    }
    return count;
}

console.log(arrayChange(tests.four));
