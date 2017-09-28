// write a function that, given 2 numbers, returns true if the last number is the same in both.

function lastNums(a, b) {
    var a = a.toString();
    var b = b.toString();
    return a.charAt(a.length - 1) === b.charAt(b.length - 1)
}

module.exports = lastNums;