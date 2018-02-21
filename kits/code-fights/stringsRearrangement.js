const tests = {
    one: ["aba", "bbb", "bab"],
    two: ["ab", "bb", "aa"],
    three: ["q", "q"],
    four: ["zzzzab", "zzzzbb", "zzzzaa"],
    five: ["ab", "ad", "ef", "eg"],
    six: ["abc", "bef", "bcc", "bec", "bbc", "bdc"],
    seven: ["abc", "abx", "axx", "abc"],
    eight: ["abc", "abx", "axx", "abx", "abc"]
}

const answers = {
    one: false,
    two: true,
    three: false,
    four: true,
    five: false,
    six: true,
    seven: false,
    eight: true
}

function stringsRearrangement(inputArray) {
    const stringLength = inputArray[0].length;
    const foundArray = [];
    // inputArray.sort();
    function isOffByOnlyOne(current, anyElement) {
        let count = 0;
        for (let i = 0; i < stringLength; i++) {
            if (current[i] !== anyElement[i]) {
                count++;
            }
        }
        return count;
    }
    inputArray.forEach((outerElement, i) => {
        let inputCopy = [...inputArray];
        inputCopy.splice(i, 1);
        const found = inputCopy.some(innerElement => {
            return isOffByOnlyOne(outerElement, innerElement) === 1;
        });
        if (found) {
            foundArray.push(found);
        }
        // console.log(inputCopy)
    });
    console.log(foundArray);
}

console.log(stringsRearrangement(tests.five));
