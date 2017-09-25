var readline = require("readline-sync");


// var input = "V School is awesome!";

//
//function encryptThis(inputString, shiftNumber) {
//    var letters = "abcdefghijklmnopqrstuvwxyz";
//    inputString = inputString.toLowerCase();
//    
//    var inputArray = inputString.split("");
//    var encryptedArray = [];
//    
//    inputArray.forEach(function(char) {
//
//        if (letters.indexOf(char) === -1) {
//            encryptedArray.push(char);
//        } else {
//            var indexShift = undefined;
//            
//            if (letters.indexOf(char) + shiftNumber > 25) {
//                indexShift = shiftNumber + (letters.indexOf(char) - 26);
//            } else {
//                indexShift = letters.indexOf(char) + shiftNumber;
//            }
//            
//            var encryptedLetter = letters[indexShift];
//            encryptedArray.push(encryptedLetter);
//        }
//    });
//    
//    return encryptedArray.join("");
//}
//
//console.log(encryptThis(input, shift));

//var input = readline.question("What phrase would you like to encrypt ").toLowerCase();
//var shift = parseInt(readline.question("How many letters would you like to shift? "));

function cipher(inputString, shift) {
    var alpha = "abcdefghijklmnopqrstuvwxyz";
    var cipherString = "";

    // loop through string, checking indexOf for conditions
    for (var i = 0; i < inputString.length; i++) {
        var currentLetter = inputString[i];
        var currentIndex = alpha.indexOf(currentLetter);
        var newIndex = currentIndex + shift;
        console.log(newIndex % 25);
        if (currentIndex === -1) {
            cipherString += currentLetter;
        } else {
            newIndex %= 25;
            cipherString += alpha[newIndex];
        }
    }
    console.log("");
    return cipherString;
}

console.log(cipher("abc", 11));
console.log(cipher("abc", 256));
