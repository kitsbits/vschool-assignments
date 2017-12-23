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


const s1 = "aabcc";
const s2 = "adcaa";
function commonCharacterCount(s1, s2) {
    const one = s1.split("").reduce((allLetters, eachLetter) => {
        console.log(allLetters)
        if (eachLetter in allLetters) {
            allLetters[eachLetter]++;
        } else {
            allLetters[eachLetter] = 1;
        }
        return allLetters;
    }, {});
    const two = s2.split("").reduce((allLetters, eachLetter) => {
        if (eachLetter in allLetters) {
            allLetters[eachLetter]++;
        } else {
            allLetters[eachLetter] = 1;
        }
        return allLetters;
    }, {});

    let letterCount = 0;
    for (letters in one) {
        if (letters in two) {
            letterCount += Math.min(one[letters], two[letters]);
        }
    }

    return letterCount;

}

// console.log(commonCharacterCount(s1, s2));

// const s1 = "aabcc";
// const s2 = "adcaa";
//
// function commonCharacterCount(s1, s2) {
//     let testArray = [];
//     for (let i = 0; i < s1.length; i++) {
//         const regex = new RegExp(s1[i], "g");
//         const match = s2.match(regex);
//         if (match !== null) {
//             testArray.push(match);
//         }
//     }
//     return testArray.length;
// }


    // let regex = new RegExp(`[${s1}]`, "g");
    // const test2 = s2.match(regex);
    //
    // let regex2 = new RegExp(`[${s2}]`, "g");
    // const test1 = s1.match(regex2);
    //
    // return [...test1, ...test2];

// const n = 1203;
// const m = 134888;
//
// function isLucky(n) {
//     let toString = n.toString();
//     const half = toString.split("").length / 2;
//     let firstHalf = toString.substr(0, half);
//     let secondHalf = toString.substr(half);
//
//     let firstSum = 0;
//     let secondSum = 0;
//
//     for (let i in firstHalf) {
//         let numI = Number(firstHalf[i]);
//         firstSum += numI;
//     }
//
//     for (let i in secondHalf) {
//         let numI = Number(secondHalf[i]);
//         secondSum += numI;
//     }
//
//     if (firstSum === secondSum) {
//         return true;
//     }
//
//     return false;
//
// }
//
// console.log(isLucky(m));

// const a = [-1, 150, 190, 170, -1, -1, 160, 180];
//
// function sortByHeight(a) {
//     const indices = [];
//     for (let i in a) {
//         if (a[i] === -1) {
//             indices.push(Number(i));
//         }
//     }
//     const sortedTrees = a.filter(number => number !== -1).sort((a, b) => a - b);
//
//     for (let i in indices) {
//         sortedTrees.splice(indices[i], 0, -1);
//     }
//
//     return sortedTrees;
// }
//
// console.log(sortByHeight(a));

// const open = [];
// const close = [];
// for (let i in s) {
//     if (s[i] === "(") {
//         open.push(i);
//     } else if (s[i] === ")") {
//         close.push(i);
//     }
// }
// close.reverse();
// console.log(open, close);

const s = "a(bc)de";
const t = "co(de(fight)s)";

function reverseParentheses(s) {
    s = s.split("");
    while (s.lastIndexOf("(") !== -1) {
        const mostInnerOpen = s.lastIndexOf("(");
        const mostInnerClosed = s.indexOf(")") + 1;
        const toReplace = s.slice(mostInnerOpen, mostInnerClosed);
        s.splice(mostInnerOpen, toReplace.length);
        toReplace.pop();
        toReplace.shift();
        s.splice(mostInnerOpen, 0, ...toReplace.reverse())
    }
    return s.join("");
}

console.log(reverseParentheses(t))
