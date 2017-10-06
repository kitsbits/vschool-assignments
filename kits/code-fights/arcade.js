// ADJACENT INTEGERS
//For inputArray = [3, 6, -2, -5, 7, 3], the output should be
//adjacentElementsProduct(inputArray) = 21.
//
//7 and 3 produce the largest product.
//
//An array of integers containing at least two elements.
//
//Guaranteed constraints:
//2 ≤ inputArray.length ≤ 10,
//-1000 ≤ inputArray[i] ≤ 1000.

//function adjacentElementsProduct (inputArray) {
//    var arraySum = -1001;
//    var highestSum = -1001;
//    var highestSumArray = [];
//    for (var i = 0; i < (inputArray.length); i++) {
//        arraySum = inputArray[i] * inputArray[i+1];
//        if (arraySum > highestSum) {
//                highestSum = arraySum;
//                highestSumArray = [inputArray[i], inputArray[i+1]];
//                console.log(highestSumArray)
//            }
//    }
//    return highestSumArray[0] * highestSumArray[1];
//}
//
//
//adjacentElementsProduct([5, 1, 2, 3, 1, 4]);

/////////////////////////////////////////
////////////// NEXT ////////////////////
// n-interesting polygon

//function shapeArea(n) {
//    var sumTotal = 1;
//    for (var i = 1; i < n; i++) {
//        sumTotal += (i * 4);
//    }
//    return sumTotal;
//}
//
//shapeArea(4);

/////////////////////////////////////////
////////////// NEXT ////////////////////
/*
Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.
*/

// function makeArrayConsecutive2(statues) {
//    statues.sort(function (a, b) {
//        return a - b;
//    });
//
//    var statuesAdded = 0;
//
//    for (var i = 0; i < statues.length; i++) {
//        console.log(`i: ${i}`);
//
//        if (statues[i + 1] === statues[i]) {
//            statues.splice(i, 1);
//            i--;
//        } else if (statues[i + 1] - statues[i] > 1) {
//            let currentPlusOne = statues[i] + 1;
//            statues.splice(i + 1, 0, currentPlusOne);
//            statuesAdded++;
//        }
//    }
//    return statuesAdded;
// }
//
// console.log(makeArrayConsecutive2([0, 3]));
// console.log(makeArrayConsecutive2([0, 0, 3]));
// console.log(makeArrayConsecutive2([4, 2, 2, 7, 18]));

/////////////////////////////////////////
////////////// NEXT ////////////////////
/*
Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.
*/
// working but too slow
// function almostIncreasingSequence(sequence) {
//     for (let i = 0; i < sequence.length; i++) {
//         const copy = sequence.slice();
//         copy.splice(i, 1);
//         const copySorted = copy.slice().sort((a, b) => a - b);
//         const anyDups = copySorted.filter(each => copySorted.indexOf(each) !== copySorted.lastIndexOf(each));
//
//
//         if (copy.join() === copySorted.join() && anyDups.length === 0) {
//             return true;
//         }
//     }
//     return false;
// }

//still working, still too slow
// function almostIncreasingSequence(sequence) {
//     for (let i = 0; i < sequence.length; i++) {
//         const copy = sequence.slice();
//         copy.splice(i, 1).sort();
//         let count = 0;
//         for (let i = 1; i < copy.length; i++) {
//             if (copy[i] > copy[i - 1]) {
//                 count++
//             }
//         }
//         if (count === copy.length - 1) {
//             return true;
//         };
//     }
//     return false;
// }

// also working - STILL too slow
function almostIncreasingSequence(sequence) {
    function isGreater(curr, i, arr) {
        return !i || curr > arr[i - 1];
    }
    
    for (let i = 0; i < sequence.length; i++) {
        const copy = sequence.slice();
        copy.splice(i, 1);
        const isTrue = copy.every(isGreater);
        if (isTrue) {
            return true;
        }
    }
    return false;
}


// console.log(`true: ${almostIncreasingSequence([1, 2, 3])}`);
// console.log(`true: ${almostIncreasingSequence([1, 3, 2])}`);
console.log(`true: ${almostIncreasingSequence([3, 5, 67, 98, 3])}`);
// console.log(`true: ${almostIncreasingSequence([1, 1, 2])}`);
// console.log(`false: ${almostIncreasingSequence([
// 1,
// 2,
// 3,
// 4,
// 5,
// 3,
// 5,
// 6
// ])}`);
// console.log(`false: ${almostIncreasingSequence([1, 2, 5, 5, 5])}`);
// console.log(`false: ${almostIncreasingSequence([1, 2, 1, 2])}`);
// console.log(`false: ${almostIncreasingSequence([1, 3, 3, 4, 3])}`);
// console.log(`false: ${almostIncreasingSequence([1, 3, 2, 1])}`);

module.exports = almostIncreasingSequence;
