var readline = require("readline-sync");

////////////////////////// GRID CONSTRUCTOR FUNCTION \\\\\\\\\\\\\\\\\\\\\\\\\\\\
var Location = function (isShip, hit, display) {
    this.isShip = isShip;
    this.hit = function () {
        if (this.beenGuessed) {
            return "tried";
        } else if (!this.beenGuessed) {
            if (this.isShip) {
                this.beenGuessed = true;
                return true;
            } else if (!this.isShip) {
                this.beenGuessed = true;
                return false;
            }
        }
    };
    this.display = "~" || display;
    this.beenGuessed = false;
}

// Random function to call when randomizing isShip
function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

////////////////////////// CREATE THE GRID \\\\\\\\\\\\\\\\\\\\\\\\\\\\\
var theGrid = [];
// Also generates grid that the user will see
var userDisplayGrid = [];

// Also generate user input limit array while looping
var inputLimits = [];

// main loop to generate grid system
for (var row = 0; row < 10; row++) {
    //create new row --> x10
    var newRow = [];
    var newDisplayRow = [];
    var newInputRow = [];
    //generate x10 objects to fill each row
    for (var column = 0; column < 10; column++) {
        function randomizeShip() {
            var randomShip = random(1, 5);
            if (randomShip === 1) {
                return true;
            } else {
                return false;
            }
        };
        var ship = randomizeShip();
        var newLocation = new Location(ship);
        newRow.push(newLocation);
        
        // Also create the grid to display to user
        newDisplayRow.push(newLocation.display);

        // Also push strings to each inputLimit row
        var nextInputColumn = row.toString() + "," + column.toString();
        newInputRow.push(nextInputColumn);
    }

    theGrid.push(newRow);
    inputLimits.push(newInputRow);
    userDisplayGrid.push(newDisplayRow);
}


// console.log(theGrid[0][1].hit());

////////// CREATES GRID TO DISPLAY TO USER \\\\\\\**can call again**\\\\\\\\

function displayGrid() {
    var theUsersGrid = [];
    
    for (var i = 0; i < grid.length; i++) {
        
    }
}

////////////////////////// GAME ITSELF \\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// Set default limit to limitInputArray
readline.setDefaultOptions({
    limit: inputLimits
});

// Game break/battleships hit counter
var shipCount = 0;

// readline - user input coordinates --> limit: 0,0 to 9,9
var getCoordinates = function () {
    // get coordinates from user
    var userInput = readline.question("We are ready to fire! What are your coordinates, Captain? ");
    // take coordinates and split into and array --> var inputArray = input.split(",");
    var inputArray = userInput.split(",");
    // parse each coordinate into a number: inputArray[0] = parseInt(inputArray[0]); & inputArray[1] = parseInt(inputArray[1]);
    var x = parseInt(inputArray[0]);
    var y = parseInt(inputArray[1]);
    // if (theGrid[input1][input2].hit()) {console.log("Hit!")} else {console.log("Miss!");}
    var currentDisplay = theGrid[x][y].display;
    var hitReturn = theGrid[x][y].hit();
    if (hitReturn === "tried") {
        console.log("You've already tried there, Captain!");
    } else if (hitReturn) {
        console.log("Hit!");
        currentDisplay = "X";
        shipCount++;
        console.log(shipCount);
    } else if (!hitReturn) {
        currentDisplay = "M";
        console.log("Miss!");
    }
}

// Game while
while (shipCount < 3) {
    getCoordinates();
}

// Win game break
while (shipCount === 3) {
    console.log("You've sunk my battleships! Super rude, but you win.");
    break;
}
