var readline = require("readline-sync");

// make empty grid array
var grid = [];

// create for loop to generate array
function generateGrid(rows, columns) {
    for (var row = 0; row < rows; row++) {
        // generate rows of array
        var newRow = [];

        // generate columns of array
        for (var column = 0; column < columns; column++) {
            // push zeros to each row of the grid 10 times
            newRow.push(0);
        }
        // push each row filled with 10 zeros to the grid 10 times
        grid.push(newRow);
    }
}

// create function that take user inputs and changes grid "location" value
function changeGrid(x, y, input) {
    grid[x][y] = input;
    console.log("\nThe grid has been changed. This is the new grid.\n");
    console.log(grid);
}


//changeGrid(1,0,10);

var coordinate = readline.question('Which grid coordinate would you like to change? ');
var change = readline.question('What number would you like to change this coordinate to? ');

var xyArray = coordinate.split(',');

var x = parseInt(xyArray[0]);
var y = parseInt(xyArray[1]);
var change = parseInt(change);

function changeGrid(x, y, input) {
    grid[x][y] = input;
    console.log("\nThe grid has been changed. This is the new grid.\n");
    console.log(grid);
}

generateGrid(3,4);
changeGrid(x, y, change);
