var readline = require("readline-sync");

// The randomizer
function random(min, max) {
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor((Math.random() * max) + min);
}

function working() {
    console.log("working");
}

function runWorking() {
    console.log("run function working");
}

var monsteyChoices = ["Fight them!", "Run the F away!", "Ask them a question."];
var fightOrFlight = [monsteyChoices[0], monsteyChoices[1]];

var monsters = [{
    name: "Thomas",
    surName: "The Idiot",
    description: "is 10 feet tall",
    canAsk: false,
    health: 8000,
    fightPoints: 6000
}, {
    name: "Barnabas",
    surName: "The Low Profile Trickster",
    description: "wearing a fedora",
    canAsk: true,
    health: 100,
    fightPoints: 550
}, {
    name: "Alexa",
    surName: "BoDexa",
    description: "holding a long, lit cigarette between the pointer and middle fingers of her left hand",
    canAsk: true,
    health: 5000,
    fightPoints: 7500
}];

function run() {
    var randomNumber = random(1, 2);
    if (randomNumber === 1) {
        console.log("Phew - you got away!");
    } else {
        console.log("Oops. They caught you...");
    }
}

function fight() {
    console.log(thisMonster.fightPoints);
}

function walk() {

    var randomNumber = random(1, 3);
    var whichMonster = random(0, monsters.length - 1);
    var thisMonster = monsters[whichMonster];
    if (randomNumber === 1) {
        // fight
        if (thisMonster.canAsk) {
            // ask a question, fight, run away
            var whatToDo = readline.keyInSelect(monsteyChoices, "You've run into " + thisMonster.name + " " + thisMonster.surName + ".\n" + thisMonster.name + " is " + thisMonster.description + ".\nWhat would you like to do?");
            if (whatToDo === 0) {
                return fight();
            } else if (whatToDo === 1) {
                return run();
            } else {
                // askAQuestion();
                return runWorking();
            }
        } else {
            console.log(thisMonster.canAsk);
            //fight or run away
            var whatToDo = readline.keyInSelect(fightOrFlight, "You've run into " + thisMonster.name + " " + thisMonster.surName + ".\n" + thisMonster.name + " is " + thisMonster.description + ".\nWhat would you like to do?");
            console.log(whatToDo);
            if (whatToDo === 0) {
                // fight();
                return working();
            } else if (whatToDo === 1) {
                return run();
            }
        }
    }
}


test = 1;
while (test < 11) {
    walk();
    console.log(test);
    test++;
}
