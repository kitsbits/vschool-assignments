const tests = {
    one: "crazy",
    four: "fuzzy"
}

const answers = {
    one: "dsbaz",
    four: "gvaaz",
}

function alphabeticShift(inputString) {
    function replaceWithNext(letter) {
        var alpha = "abcdefghijklmnopqrstuvwxyz";
        if (alpha.indexOf(letter) === 25) {
            return "a"
        } else {
            return alpha[alpha.indexOf(letter) + 1];
        }
    }

    return inputString.split("").map(eachLetter => {
        return replaceWithNext(eachLetter);
    }).join("");
}


console.log(alphabeticShift(tests.one))
