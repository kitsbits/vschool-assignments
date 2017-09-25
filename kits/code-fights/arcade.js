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
    statues.sort();
    var statuesNeeded = 0;
    for (var i = 0; i < statues.length; i++) {
        if ((statues[i + 1] - statues[i]) > 1) {
            var toSplice = statues[i] + 1;
            console.log(toSplice);
            statues.splice(statues[i], 0, toSplice);
            statuesNeeded = i;
        } 
    }
    return statuesNeeded;
}

console.log(makeArrayConsecutive2([0,3]));
