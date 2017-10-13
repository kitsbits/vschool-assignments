// matrix = [
//     [0,0,0,0],
//     [1,0,0,1],
//     [0,0,1,1]
// ];
//
// function matrixElementsSum(matrix) {
//     let finalArray = []
//     for (let i = 0; i < matrix.length; i++) {
//         let row = matrix[i];
//         let prevRow = matrix[i-1];
//         let newRow = []
//         for (let i = 0; i < row.length; i++) {
//             if (row[i] !== 0 && (!prevRow || prevRow[i] !== 0)) {
//                 newRow.push(row[i])
//             } else {
//                 row[i] = 0;
//             }
//         }
//         finalArray.push(newRow);
//
//     }
//     return [].concat(...finalArray).length !== 0 ? [].concat(...finalArray).reduce((total, num) => total + num) : 0;
// }
//
// console.log(matrixElementsSum(matrix));



////
// const inputArray = ["aba"];
//
// function allLongestStrings(inputArray) {
//     function sortHelper(a, b) {
//         return b.length - a.length;
//     }
//     inputArray.sort(sortHelper);
//     return inputArray.filter((each, i, array) => {
//         const firstIndex = array[0];
//         console.log(firstIndex);
//         return each.length === firstIndex.length;
//     });
// }
//
// console.log(allLongestStrings(inputArray));


////

const s1 = "abca";
const s2 = "xyzbac";
function commonCharacterCount(s1, s2) {
    // const one = s1.split("").reduce((allLetters, eachLetter) => {
    //     if (eachLetter in allLetters) {
    //         allLetters[eachLetter]++;
    //     } else {
    //         allLetters[eachLetter] = 1;
    //     }
    //     return allLetters;
    // }, {});
    const split2 = s2.split("");
    console.log(split2);
    let letterCount = 0;
    for (let i = 0; i < s1.length; i++) {
        split2.forEach((letter, index) => {
            console.log(`letter outside: ${letter}`);
            if (!index || letter !== letter[index-1]) {
                if (letter === s1[i]) {
                    letterCount++;
                    console.log(`letter inside: ${letter}`);
                    console.log(`s1[i]: ${s1[i]}`);
                }
            }
        })
    }
    return letterCount;
}

console.log(commonCharacterCount(s1, s2));
