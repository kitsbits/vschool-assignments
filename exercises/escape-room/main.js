var readline = require("readline-sync");

var choices = ["Put hand in hole", "Find the key, or", "Open the door"];
var boxChoices = ["Put hand in hole, or", "Keep looking around"];
var ongoingChoices = ["Behind the troll statue", "Under the couch", "Inside the plastic elephant statue", "Under the Persian rug", "In your pocket", "In the hole"];
var areYouSure = ["Put your hand in the hole real quick, or", "Open the door"];


var endGame = 0;

var userName = readline.question('Hi there. You seem to be locked inside this room. What is your name? ');

function makeChoice() {
    return readline.keyInSelect(choices, "Hi, " + userName + ". " + "Again, you're locked in here, so, what would you like to do?");
}
var welcomeToYourChoices = makeChoice();

// put hand in hole --> dies/game ends
function putsHandInHole() {
    console.log("Dude, honestly, never put your hand in the hole.");
    return endGame = 1;
}

// finds key --> gets out/game ends
function findsKey() {
    console.log("Phew. You got out. Good luck in this much larger, but still locked room we call 'Earth'.");
    return endGame = 1;
}

// try to open the door without the key
function tryToOpenDoor() {
    console.log("Sorry, you can't open the door without the key.");
    return choices.pop();
}

// continue to prompt new places until they get the right one
function looking() {
       return readline.keyInSelect(ongoingChoices, "Where would you like to look?"); 
    }
    
// keep looking around
function keepLookingAround() {
    function sorry() {
        console.log("Nope! Sorry! It's not there.");
    }
    var lookedThere = looking();
    
    switch (ongoingChoices[lookedThere]) {
        case "Behind the troll statue":
            sorry();
            ongoingChoices.splice(lookedThere, 1);
            keepLookingAround();
            break;
        case "Under the couch":
            sorry();
            ongoingChoices.splice(lookedThere, 1);
            keepLookingAround();
            break;
        case "Inside the plastic elephant statue":
            sorry();
            ongoingChoices.splice(lookedThere, 1);
            keepLookingAround();
            break;
        case "Under the Persian rug":
            sorry();
            ongoingChoices.splice(lookedThere, 1);
            keepLookingAround();
            break;
        case "In your pocket":
            console.log("A key! You had it with you the whole time! Let this be a life lesson about already having everything you need. Or, don't- I don't care what you do.");
            var areYouSureYouDontWantToPutYourHandInTheHole = readline.keyInSelect(areYouSure, "Do you want to unlock the door and get out of here... or just quickly put your hand in the hole?");
            switch (areYouSure[areYouSureYouDontWantToPutYourHandInTheHole]) {
                case "Open the door":
                    console.log("working");
                    findsKey();
                    break;
                case "Put your hand in the hole real quick, or":
                    console.log("working");
                    putsHandInHole();
                    break;
            }
            break;
        case "In the hole":
            putsHandInHole();
            break;
    }
}

// don't have key yet
while (endGame === 0) {

    switch (choices[welcomeToYourChoices]) {
        case "Put hand in hole":
            putsHandInHole();
            break;
        case "Find the key, or":
            if (readline.keyInYN("You look around and see a box labeled 'Here is the key!' Do you want to go over and open the box?")) {
                var openedTheBox = readline.keyInSelect(boxChoices, "Inside the box there's a little note that reads, 'The key is in the hole. Put your hand in the hole.' What would you like to do?");
                switch (boxChoices[openedTheBox]) {
                    case "Put hand in hole, or":
                        endGame = 1;
                        putsHandInHole();
                        break;
                    case "Keep looking around":
                        endGame = 1;
                        looking();
                        break;
                }
                break;
            } else {
                endGame = 1;
                keepLookingAround();
                break;
            }
        case "Open the door":
            tryToOpenDoor();
            welcomeToYourChoices = makeChoice();
            break;
    }

}
