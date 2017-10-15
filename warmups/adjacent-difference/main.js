// arr = ["is", "an", "array", "something", "something else", "another thing", "more things", "in", "this", "array"];

arr = ["this", "a", "an", "array"]

const findLongestCombined = (arr) => {
    let longestLengthSoFar = 0;
    let longestArraySoFar = [];

    for (let i = 0; i < arr.length - 2; i++) {
        let testArray = [];

        let current = arr[i];
        let next = arr[i+1];
        let third = arr[i+2];

        testArray.push(current, next, third);
        if (testArray.join("").length > longestLengthSoFar) {
            longestLengthSoFar = testArray.join("").length;
            longestArraySoFar = testArray;
        }
    }
    return longestArraySoFar;
}

console.log(findLongestCombined(arr));

module.exports = findLongestCombined;
