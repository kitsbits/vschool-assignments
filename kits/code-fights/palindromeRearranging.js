const tests = {
    one: "aabb", // true
    two: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc", // false
    three: "abbcabb", // true
    four: "zyyzzzzz", // true
    five: "z", // true
    six: "zaa", // true
    seven: "abca", // false
}

function palindromeRearranging(inputString) {
    let oddNumberCount = 0;
    // split/reduce inputString into an object that counts unique chars
    const letterCounts = inputString.split("").reduce((count, eachLetter) => {
        if (eachLetter in count) count[eachLetter]++;
        else count[eachLetter] = 1;
        return count;
    }, {});
    // iterate over each object property
    for (letters in letterCounts) {
        if (letterCounts[letters] % 2 !== 0) {
            oddNumberCount++;
        }
    }

    if (oddNumberCount > 1) {
        return false;
    }
    // if more than one char an odd number, return false
    // else return true
    return true;
}

console.log(palindromeRearranging(tests.one));
console.log(palindromeRearranging(tests.two));
console.log(palindromeRearranging(tests.three));
console.log(palindromeRearranging(tests.four));
console.log(palindromeRearranging(tests.five));
console.log(palindromeRearranging(tests.six));
console.log(palindromeRearranging(tests.seven));
