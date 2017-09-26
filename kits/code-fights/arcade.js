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


/*
Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.
*/

function makeArrayConsecutive2(statues) {
    // OUTLIERS 
    // what if two of the same number?

    // sort array
    statues.sort();

    // count statues added
    var statuesAdded = 0;

    // iterate through array to determine if next - current > 1
    for (var i = 0; i < statues.length - 1; i++) {
        var current = statues[i];
        console.log(current);
        console.log(i + 1);
        var next = statues[i + 1];
        console.log(statues[i]);
        var nextIndex = i + 1;
        var currentPlusOne = current + 1;

        if (next === current) {
            statues.splice(i, 1);
            i--;
        } else if (next - current > 1) {
            statues.splice(nextIndex, 0, currentPlusOne);
            statuesAdded++;
        }
    }
    // return number of statues added to array
    return statuesAdded;
}

//console.log(makeArrayConsecutive2([0, 3]));
//console.log(makeArrayConsecutive2([0, 0, 3]));
console.log(makeArrayConsecutive2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
