const tests = {
    one: [2, 4, 1, 0], // 3
    two: [1, 1, 1, 1], // 0
    three: [-1, 4, 10, 3, -2] // 7
};

function arrayMaximalAdjacentDifference(inputArray) {
    let maximalAbsDifference = 0;
    // iterate through inputArray
    for (let i = 0; i < inputArray.length - 1; i++) {
        // find absolute difference between each consecutive set of elements
        const currentAbsDifference = Math.abs(inputArray[i] - inputArray[i+1]);
        // compare to current maximalAbsDifference
        if (currentAbsDifference > maximalAbsDifference) {
            maximalAbsDifference = currentAbsDifference;
        }
    }

    return maximalAbsDifference;
}

console.log(arrayMaximalAdjacentDifference(tests.one));
console.log(arrayMaximalAdjacentDifference(tests.two));
console.log(arrayMaximalAdjacentDifference(tests.three));
