var readline = require("readline-sync");

// create a place to hold all the objects
var dictionary = {};


counter = 0;
while (counter < 5) {
    var word = readline.question("Enter a word to add to your dictionary: ").toLowerCase();
    
    if (word === "q") {
        break;
    }
    
    if (dictionary[word]) {
        console.log("The definition of " + word + " is: " + dictionary[word]);
    } else {
        var definition = readline.question("Enter the definition of your word: ");
        dictionary[word] = definition;
        console.log("Okay! Added.");
    }

    counter++;
}


////////EXTRA\\\\\\\\\\\\
//Do not allow any variation of the word to be saved as a duplicate. For example, if "brick" was entered your dictionary would reject "bricks" as a new word.
// some() method?
