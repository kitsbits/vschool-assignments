//1. Write a function that takes an array of numbers and returns the largest

//function largest(arr) {
//    var theLargest = arr[0];
//    
//    for (var i = 1; i < arr.length; i++) {
//        if (theLargest < arr[i]) {
//            theLargest = arr[i];    
//        }
//    }
//    return theLargest;
//}
//
//console.log(largest([1,23123,5,-1,12,45,7894565,-25]))

//2. Write a function that takes an array of words and a character and return each word that has that letter present

function wheresMyCharAt(arr, char) {
//    var wordsHaveChar = [];
    
//    for (var j = 0; j < arr.length; j++) {
//        var word = arr[j];
//        if (word.indexOf(char) !== -1) {
//            wordsHaveChar.push(word);
//        }
//    }
    
//    arr.forEach(function(word) {
//        if (word.indexOf(char) !== -1) {
//            wordsHaveChar.push(word);
//        }
//    });
    
    var wordsHaveChar = arr.filter(function(word) {
        return word.indexOf(char) !== -1;
    });

    return wordsHaveChar;
}

console.log(wheresMyCharAt(["best", "rest", "kill", "answer", "test"], "t"));

//3. Write a function that takes a num1 and num2 and returns whether num1 is
//divisible by num2

function isDivisible(a, b) {
    return a % b === 0;
}

console.log(isDivisible(4, 2)); // true
console.log(isDivisible(5, 2)); // false