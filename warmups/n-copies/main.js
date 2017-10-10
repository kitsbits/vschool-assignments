const nCopies = (str, n) => {
    let firstThree = str.substring(0,3);
    // let totalString = "";
    // for (let i = 0; i < n; i++) {
    //     totalString = totalString.concat(firstThree);
    // }
    return firstThree.repeat(n);
}

module.exports = nCopies;
