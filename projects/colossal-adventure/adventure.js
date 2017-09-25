var readline = require("readline-sync");

// The Randomizer
function random(min, max) {
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor((Math.random() * max) + min);
}

var canHave = 6;
var youHave = [{
    health: 3500,
    fightPoints: 800
}, ];
var health = youHave[0].health;
var yourFightPoints = youHave[0].fightPoints;
// Add/take away to fight points depending on what's in your youHave

var monsteyChoices = ["Fight them!", "Run the F away!", "Ask them a question."];
var fightOrFlight = [monsteyChoices[0], monsteyChoices[1]];

function NewMonsteys(name, surName, description, canAsk, health, fightPoints) {
    this.name = name;
    this.surName = surName;
    this.description = description;
    this.canAsk = canAsk;
    this.health = health;
    this.fightPoints = fightPoints;
}

function takeYourShit() {
    // random picks an item from youHave

    // if bag/wagon, lose all the shit in your bag/wagon --> bag/wagon arrays inside the youHave array
}

// have a function that grabs certain number of monsteys randomly so that each game is a little bit different?
var monsters = [{
    name: "Thomas",
    surName: "The Idiot",
    description: "is 10 feet tall",
    canAsk: true,
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
}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

// Console must greet player with a fun message
console.log("Hi there. Looks like you've stumbled into a forest dangereuse. Unfortunately, you cannot turn back now, you must keep going. You will find this forest filled with many deadly creatures but also many amazing and wonderful things to collect along the way. In your pocket is a key that opens a door. You may only use it once, so choose your door wisely.");
// Console must ask for the player's name and store it
var userName = readline.question("Now, what is your name, dear wonderer?");
console.log("Well, " + userName + ", I wish you luck on your journey. At any time you may check what you have - including health and fight points - by hitting 'p'.");

//if (youHave.some("bag")) {canHave = 12;} --> find bag, more youHave
//if (youHave.some("wagon")) {canHave = 36;} --> find the wagon, even more youHave

//The console will ask the user to enter a "w" to walk
//Every time the player walks, a random algorithm will be run that determines if a wild enemy has appeared (A 1/3 or 1/4 chance of being attacked)
// TESTED
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
                // fight();
                return working();
            } else if (whatToDo === 1) {
                run();
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
                run();
            }
        }
    }
}

//The enemy is random (can be chosen out of a minimum of 3 different enemy names)
//The user can decide to attack or run
//If attacking, you will choose a random attack power between a min and max
//If running, you will choose a random number between 1 and 2 - meaning a 50% chance of escaping
function run() {
    var randomNumber = random(1, 2);
    if (randomNumber === 1) {
        console.log("Phew - you got away!");
    } else {
        console.log("Oops. They caught you...");
    }
}
//After the player attacks or runs the enemy attacks back for a random damage amount
//If the player kills the enemy you can give the Player some HP and a special item that is stored in the inventory
//If the enemy kills the player the console prints an cool death message and the game ends
function fight() {

}

//Inventory
var inventory = [];

//When the player kills enemies, they are awarded with items
//If the user enters 'Print' in the console, the console will print the players name, HP, and each item in their inventory
