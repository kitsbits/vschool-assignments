var readline = require("readline-sync");

var yourName = readline.question("What is your name? ");

console.log("Oh, hey", yourName.toUpperCase(), ". Your name has", yourName.length, "characters in it.");

var wannaPlay = readline.keyInYN("Do you wanna play a fun game? ");

if (wannaPlay) {
    var concatOne = readline.question("Please enter a word. ");
    var concatTwo = readline.question("Great. Please enter another word. ");
    
    function celebName(a, b) {
        var partOne = a.substr(0, 3);
        var partTwo = b.substr(1);
        
        return partOne + partTwo;
    }
    
    console.log("If these words were in love, their celebrity hashtag would be: #" + celebName(concatOne, concatTwo));
    
    var longMess = readline.question("Please type me a long message of love. ");
    
    function endOfLongMess(message, a, b) {
        if (b === undefined) {
            a = message.length / 2;
            return message.substr(a);
        }
        return message.substr(a, b);
    }
    
    console.log(endOfLongMess(longMess, undefined, undefined));
    console.log("Take a look at your message again: \n" + longMess);
    
    var firstIndex = parseInt(readline.keyIn("Where should I start cutting? "));
    var secondIndex = parseInt(readline.keyIn("Where should I end cutting? "));
    
    console.log(endOfLongMess(longMess, firstIndex, secondIndex));
    
}