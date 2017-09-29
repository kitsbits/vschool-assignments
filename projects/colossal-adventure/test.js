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

var monsterChoices = ["Fight them!", "Run the F away!", "Ask for advice."];
var fightOrFlight = [monsterChoices[0], monsterChoices[1]];

var youHave = [{
    health: 3500,
    fightPoints: 800,
    wagon: ["You don't have this yet"],
    bag: ["You don't have this yet"]
}, "a key", "stuff", "stuff", "stuff", "stuff", "stuff"];

function checkYourself() {
    var health = "Health: " + youHave[0].health;
    var fightPoints = "Fighting Points: " + youHave[0].fightPoints;
    var onPerson = "On your person: " + youHave.slice(1).join(", ");
    var inWagon = "In your wagon: " + youHave[0].wagon.join(", ");
    var inBag = "In your bag: " + youHave[0].bag.join(", ");

    console.log(`\n${health}
${fightPoints}
${onPerson}
${inBag}
${inWagon}`);
}

var monsters = [{
    name: "Thomas",
    surName: "The Idiot",
    description: "10 feet tall",
    canAsk: false,
    health: 8000,
    fightPoints: 5000,
    deathMessage: "Idiots are very dangerous."
}, {
    name: "Barnabas",
    surName: "The Low Profile Trickster",
    description: "wearing a fedora",
    canAsk: true,
    health: 100,
    fightPoints: 550,
    deathMessage: "Oops."
}, {
    name: "Alexa",
    surName: "BoDexa",
    description: "holding a long, lit cigarette between the pointer and middle fingers of her left hand",
    canAsk: true,
    health: 5000,
    fightPoints: 9500,
    deathMessage: "Never fight Alexa, she's always got a blade and she's always faster than you are."
}];

var goodHitMessages = ["You landed a good hit!", "Wow, you're pretty scrappy...", "Nice. You can hold your own.", "Sheesh! You wailed on them.", "Well, aren't we tough AF.", "*clapping emoji* When it comes to life or death, you are a fisticuffs."];

var gotHitMessages = ["Whelp.", "Yikes.", "Oops. You're getting beaten senseless. Get your head back in the game!", "Nice work! Just kidding. You just got hit in the face. Hard.", "It is not your day, I guess."];

var lesserGoods = ["a candle", "a short dagger", "a rock", "some toothpaste", "a not unsubstantial stick", "a bag"];
var betterGoods = ["a sword", "an axe", "a club", "another key", "a map", "diamonds", "a wagon"];

// If adding places --> MUST be between "in my bag" and "on my person"
var inMyWagon = "In my wagon";
var inMyBag = "In my bag";
var onMyPerson = "On my person";
var placesToPut = [inMyWagon, inMyBag, onMyPerson];

function whatYouWantToDo() {
    var toDo = readline.keyInSelect(["Walk", "Check Inventory"], "Would you like to explore or check your inventory?");
    if (toDo === 0) {
        walk();
    } else if (toDo === 1) {
        checkYourself();
    }
}

function walk() {

    var randomNumber = random(1, 3);
    var whichMonster = random(0, monsters.length);
    var thisMonster = monsters[whichMonster];

    if (randomNumber === 1) {
        if (thisMonster.canAsk) {
            var whatToDo = readline.keyInSelect(monsterChoices, "You've run into " + thisMonster.name + " " + thisMonster.surName + ".\n" + thisMonster.name + " is " + thisMonster.description + ".\nWhat would you like to do?");

            if (whatToDo === 0) {
                return fight(thisMonster, whichMonster);
            } else if (whatToDo === 1) {
                return run();
            } else {
                // askAQuestion();
                return working();
            }
        } else {
            var whatToDo = readline.keyInSelect(fightOrFlight, "You've run into " + thisMonster.name + " " + thisMonster.surName + ".\n" + thisMonster.name + " is " + thisMonster.description + ".\nWhat would you like to do?");
            if (whatToDo === 0) {
                return fight(thisMonster, whichMonster);
            } else if (whatToDo === 1) {
                return run();
            }
        }
    }
}

function fight(thisMonster, whichMonster) {
    var fighting = 1;
    while (fighting < 5) {
        var hitPoints = random(1, thisMonster.fightPoints / 2);
        var userNumber = random(1, youHave[0].fightPoints);
        var monsterNumber = random(1, thisMonster.fightPoints);
        var randomGoodHit = random(0, goodHitMessages.length - 1);
        var randomGotHit = random(0, gotHitMessages.length - 1);
        var randomBetterGood = random(0, betterGoods.length - 1);
        var randomLesserGood = random(0, lesserGoods.length - 1);

        if (youHave[0].health <= 0) {
            dead(thisMonster.deathMessage);
            test = 12;
            break;
        } else if (thisMonster.fightPoints <= 0) {
            console.log("\nYou won this fight AND vanquished this monster!\nYou won't be seeing them anymore.\nYou've also walked away with: " + betterGoods[randomBetterGood] + "!");
            monsters.splice(whichMonster, 1);
            checkYourself();
            var newItem = betterGoods[randomBetterGood];
            return getShit(newItem);
        } else if (fighting === 4) {
            console.log("\nSomehow, you made it three rounds with " + thisMonster.name + "- well done!\nYou've walked away with: " + lesserGoods[randomLesserGood] + "!");
            checkYourself();
            var newItem = lesserGoods[randomLesserGood];
            return getShit(newItem);
        } else if (userNumber > monsterNumber) {
            thisMonster.fightPoints -= hitPoints;
            console.log("\nRound" + fighting + ":\n" + goodHitMessages[randomGoodHit] + "\n" + thisMonster.name + " just lost " + hitPoints + " fight points.\nThey only have " + thisMonster.fightPoints + " left.");
            fighting++;
        } else if (monsterNumber > userNumber) {
            youHave[0].health -= hitPoints;
            console.log("\nRound" + fighting + ":\n" + gotHitMessages[randomGotHit] + "\nYou just lost " + hitPoints + " health points.\nYour health is now " + youHave[0].health + ".\n");
            fighting++;
        }
    }
}

function dead(monsterDeathMessage) {
    console.log("You are dead.\n" + monsterDeathMessage);
}

function dontHaveYet() {
    console.log("Sorry, you don't have this item yet and so cannot put anything in it.");
}

function full() {
    return readline.keyInSelect(["Choose again where you'd like to put item", "Discard item"], "Sorry, this is full. What would you like to do?")
}

function getShit(itemToAdd) {
    
    // splice in items if everything is full!

    var noWagon = youHave[0].wagon[0] !== "You don't have this yet";
    var noBag = youHave[0].bag[0] !== "You don't have this yet";
    var personFull = youHave.length > 7;
    var wagonFull = youHave[0].wagon.length > 11;
    var bagFull = youHave[0].bag.length > 6;

    var stillHaveToPick = true;
    while (stillHaveToPick) {
        var putWhere = readline.keyInSelect(placesToPut, "Where would you like to put it?");

        console.log("\n")
        console.log(placesToPut[putWhere]);
        console.log(putWhere);


        switch (placesToPut[putWhere]) {
            case inMyWagon:

                if (youHave[0].wagon[0] === "You don't have this yet") {
                    dontHaveYet();
                } else if (wagonFull) {
                    console.log(placesToPut[putWhere] === inMyWagon);
                    console.log("wagon");
                    console.log(youHave.length);
                    console.log(personFull);
                    full();
                    if (full === 0) {
                        return;
                    } else if (full === 1) {
                        stillHaveToPick = false;
                        return whatYouWantToDo();
                    }
                } else {
                    stillHaveToPick = false;
                    if (itemToAdd === "a wagon") {
                        youHave[0].wagon[0] = "respect";
                    } else {
                        youHave[0].wagon.push(itemToAdd);
                    }
                    return checkYourself();
                }
                break;

            case inMyBag:

                if (youHave[0].bag[0] === "You don't have this yet") {
                    dontHaveYet();
                } else if (bagFull) {
                    console.log("bag");
                    console.log(youHave.length);
                    console.log(personFull);
                    full();
                    if (full === 0) {
                        return;
                    } else if (full === 1) {
                        stillHaveToPick = false;
                        return whatYouWantToDo();
                    } else {
                        stillHaveToPick = false;
                        if (itemToAdd === "a bag") {
                            youHave[0].bag[0] = "lint";
                        } else {
                            youHave[0].bag.push(itemToAdd);
                        }
                        return checkYourself();
                    }
                }
                break;

            case onMyPerson:
                if (personFull) {
                    full();
                    if (full === 1) {
                        stillHaveToPick = false;
                        return whatYouWantToDo();
                        console.log(youHave.length);
                        console.log(personFull);
                    }
                } else {
                    stillHaveToPick = false;
                    checkYourself();
                    return youHave.push(itemToAdd);
                }

        }
    }
}


function run() {
    var randomNumber = random(1, 2);
    if (randomNumber === 1) {
        console.log("Phew - you got away!");
    } else {
        console.log("Oops. They caught you... You lost 100 health points.");
        youHave[0].health -= 100;
        if (youHave[0].health < 0) {
            console.log("You are dead.");
            test = 12;
            // write youAreDead function
        } else if (youHave.length > 3) {
            var takeRandom = random(2, youHave.length - 1);
            console.log("They also took: " + youHave[takeRandom] + " :/");
            youHave.splice[takeRandom, 1];
        } else {
            checkYourself();
        }
    }
}


test = 1;
while (test < 12) {

    // switch/do while(?) --> while (north/south/east/west) --> some set of advice arrays, set of thingsFound arrays + questions

    // ask what direction they want to walk
    // when find specific item in each north/south/east/west --> that direction becomes true/false/"found" --> splices that direction from choices
    // when north/south/east/west all true/false/"found" --> game is over "You got out with your kitten!"
    whatYouWantToDo();
    test++;
}
