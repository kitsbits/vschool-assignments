// All in one
function generateRandomPassword(num) {
    var possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%^&*(),./\[]{}+=";
    var generatedPassword = [];

    for (var i = 0; i < num; i++) {
        var random = Math.floor(Math.random() * (possibleChars.length - 1));
        generatedPassword.push(possibleChars[random]);
        
    }
    
    return generatedPassword.join("");
}

console.log(generateRandomPassword(10));

// Mix-n-match FIX - find a way to generate % of each string
//function betterRandomPassword(num) {
//    var possibleUppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//    var possibleLowers = "abcdefghijklmnopqrstuvwxyz";
//    var possibleNumbers = "1234567890";
//    var possibleSpecials = "!@#$%^&*()_-+=|\/?.,<>[]{}";
//    
//    var betterdPassword = [];
//    
//    console.log(Math.floor(num / 3));
//
//        for (var i = 0; i < Math.floor(num - 6); i++) {
//            var random = Math.floor(Math.random() * (possibleLowers.length - 1));
//            betterdPassword.splice(random, 0, possibleLowers[random]);        
//        }
//        
//        for (var i = 0; i < Math.floor(num - 6); i++) {
//            var random = Math.floor(Math.random() * (possibleUppers.length - 1));
//            betterdPassword.splice(random, 0, possibleUppers[random]);        
//        }
//    
//        for (var i = 0; i < Math.floor(num - 7); i++) {
//            var random = Math.floor(Math.random() * (possibleNumbers.length - 1));
//            betterdPassword.splice(random, 0, possibleNumbers[random]);       
//        }
//    
//        for (var i = 0; i < Math.floor(num - 9); i++) {
//            var random = Math.floor(Math.random() * (possibleSpecials.length - 1));
//            betterdPassword.splice(random, 0, possibleSpecials[random]);         
//        }
//    
//    return betterdPassword.join("");
//}
//
//console.log(betterRandomPassword(10));

// Out of possibleCharacters Object

var possibleUppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var possibleLowers = "abcdefghijklmnopqrstuvwxyz";
var possibleNumbers = "1234567890";
var possibleSpecials = "!@#$%^&*()_-+=|\/?.,<>[]{}";

var possibleCharacters = [];

for (var i = 0; i < possibleUppers.length; i++) {
    possibleCharacters[0].upperCase = possibleUppers[i];
}

console.log(possibleCharacters[1].upperCase);