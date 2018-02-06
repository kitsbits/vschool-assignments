const tests = {
    one: "172.16.254.1", // true
    two: "172.316.254.1", // false
    three: ".254.255.0", // false
    four: "1.1.1.1a", // false
    five: "1", // false
    six: "0.254.255.0", // true
    eight: "1.23.256..", // false
}

function isIPv4Address(inputString) {
    // split inputString on dots
    const stringValues = inputString.split(".");
    // check if array.length === 4, if not return false
    if (stringValues.length !== 4) {
        return false;
    }
    // check if all chars are numbers only && within 0 - 255 range, if not return false

    for (let i = 0; i < stringValues.length; i++) {
        const value = stringValues[i];
        if (isNaN(Number(value)) || value === "") {
            return false;
        }
        if (Number(value) < 0 || Number(value) > 255) {
            return false;
        }
    }

    return true;
}

console.log(isIPv4Address(tests.one));
console.log(isIPv4Address(tests.two));
console.log(isIPv4Address(tests.three));
console.log(isIPv4Address(tests.four));
console.log(isIPv4Address(tests.five));
console.log(isIPv4Address(tests.six));
console.log(isIPv4Address(tests.eight));
