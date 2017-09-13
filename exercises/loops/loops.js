// Write a function that accepts a string as input. Write a loop to print out each letter of that string individually.

//function printEachLetter(aString) {
//    for (var i = 0; i < aString.length; i++) {
//        console.log(aString[i]);
//    }
//}
//
//printEachLetter(";lkajdsf;hja");

// Write a function that accepts a string and a single character as inputs. Write a loop that iterates over the string, and prints the position of the first occurrence of the specified character. If the character is not found, tell that to the user.

//function isCharHere(aString, aChar) {
//    if (!aString || !aChar) {
//        throw Error("You have not provided enough inputs. Please enter a string AND a character to test.");
//    }
//    
//    for (var i = 0; i < aString.length; i++) {
//        if (aString.indexOf(aChar) === -1) {
//            return "Sorry, that character was not found!";
//        }
//        return aString.indexOf(aChar);
//    }
//}
//
//console.log(isCharHere("Testing", "s"));

//Write a function that accepts an array of numbers as a parameter. Quit the function when the number 42 is found. Let the user know if 42 is not found.

//var arrayOfNums = [1, 2, "42", 3, 42, 25, 55];
//
//function meaningfulOrMeaningless(anArray) {
//    for (var i = 0; i < anArray.length; i++) {
//        if (anArray[i] === 42) {
//            return "Found the answer to the universe!";
//        }
//    }
//    return "No meaning to this universe, sorry!";
//}
//
//console.log(meaningfulOrMeaningless(arrayOfNums));

// Write a function that accepts 10 numbers in an array and then prints out the smallest number out of the ten without using Math.max()

var numbArray = [55, 100000, 25, 2, 3, 75757575, 42, 25, 600, 2];
var numbArrayToo = [55, 100000, 25, 2, 3, 75757575, 42, 25, -10, -100000];

function smallestNumTheFirst(anArray) {
    anArray.sort(function(a, b) {
        return a-b;
    });
    return anArray[0];
}

console.log(smallestNumTheFirst(numbArray));


function smallestNumTheSecond(anotherArray) {
    var smallest = 0;
    
    for (var i = 0; i < anotherArray.length; i++) {
        if (smallest > anotherArray[i]) {
            smallest = anotherArray[i];
        }
    }
    return smallest;
}

console.log(smallestNumTheSecond(numbArrayToo));