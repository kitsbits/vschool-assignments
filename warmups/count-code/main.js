str = "aaacodebbcopebddddcodecodecodexxx";

function countCode(aString) {
    var count = 0;

    for (var i = 0; i < aString.length; i++) {
        if (aString[i] === "c" && aString[i + 1] === "o" && aString[i + 3] === "e") {
            count++;
        }
    }
    return count;
}

console.log(countCode(str));
