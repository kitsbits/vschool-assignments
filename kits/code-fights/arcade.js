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

function adjacentElementsProduct (inputArray) {
    var arraySum = -1001;
    var highestSum = -1001;
    var highestSumArray = [];
    for (var i = 0; i < (inputArray.length); i++) {
        arraySum = inputArray[i] * inputArray[i+1];
        if (arraySum > highestSum) {
                highestSum = arraySum;
                highestSumArray = [inputArray[i], inputArray[i+1]];
                console.log(highestSumArray)
            }
    }   
    return highestSumArray[0] * highestSumArray[1];
}


adjacentElementsProduct([5, 1, 2, 3, 1, 4]);

// n-interesting polygon

function shapeArea (n) {
    if (n = 1) {
        return 1;
    } else {
        return (n * 4) + (n - 1);
    }
}

console.log(shapeArea(3));
