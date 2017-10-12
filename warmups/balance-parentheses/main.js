
const areBalanced = (str) => {
    // let parenArray = str.split("").filter(each => each === ")" || each === "(");
    //
    // let openings = parenArray.filter(each => each === "(").length;
    // let closings = parenArray.filter(each => each === ")").length;
    // if (closings !== openings) {
    //     return false;
    // }
    //
    // if (parenArray.indexOf(")") < parenArray.indexOf("(") || parenArray.lastIndexOf(")") < parenArray.lastIndexOf("(")) {
    //     return false;
    // }
    //
    // return true;
    // let parenCount = parenArray.reduce((total, each, i, arr) => {
    //     if(each === "(") {total.open++}
    //     if(each === ")") {total.close++}
    //     return total;
    // }, {open: 0, close: 0, test: false});
    // return parenCount.open % 2 === 0 && parenCount.close % 2 === 0;

    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(") {
            count++;
        } else if (str[i] === ")") {
            count--;
            if (count < 0) {
                return false;
            }
        }
    }
    return count === 0;
}

module.exports = areBalanced;

console.log(areBalanced("(asdf)x(asdf)"));
console.log(areBalanced(")()("));
