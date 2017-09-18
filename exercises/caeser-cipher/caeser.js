var readline = require("readline-sync");

var input = readline.question("What phrase would you like to encrypt ").toLowerCase();
var shift = parseInt(readline.question("How many letters would you like to shift? "));
 
// var input = "V School is awesome!";


function encryptThis(inputString, shiftNumber) {
    var letters = "abcdefghijklmnopqrstuvwxyz";
    inputString = inputString.toLowerCase();
    
    var inputArray = inputString.split("");
    var encryptedArray = [];
    
    inputArray.forEach(function(char) {

        if (letters.indexOf(char) === -1) {
            encryptedArray.push(char);
        } else {
            var indexShift = undefined;
            
            if (letters.indexOf(char) + shiftNumber > 25) {
                indexShift = shiftNumber + (letters.indexOf(char) - 26);
            } else {
                indexShift = letters.indexOf(char) + shiftNumber;
            }
            
            var encryptedLetter = letters[indexShift];
            encryptedArray.push(encryptedLetter);
        }
    });
    
    return encryptedArray.join("");
}

console.log(encryptThis(input, shift));