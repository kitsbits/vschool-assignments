var readline = require("readline-sync");

var whichFunc = {
    calculationMethods: {
        add: function(num1, num2) {
            return num1 + num2;
        },

        subtract: function(num1, num2) {
            return num1 - num2;
        },

        multiply: function(num1, num2) {
            return num1 * num2;
        },

        divide: function(num1, num2) {
            return num1 / num2;
        }  
    },
    
    funcsArray: function() {
        var availableFunctions = Object.keys(this.calculationMethods);
        return availableFunctions;
    },
    
//    funcToPerform: function(usersChoice) {
//        if (usersChoice === "add") {
//            return this.add(firstNum, secondNum);
//        } else if (usersChoice === "subtract") {
//            return this.subtract(firstNum, secondNum);      
//        } else if (usersChoice === "multiply") {
//            return this.multiply(firstNum, secondNum);      
//        } else if (usersChoice === "divide") {
//            return this.divide(firstNum, secondNum);      
//        }
//    }
    
//    funcToPerform: function(usersChoice) {
//        for (func in this) {
//            if (func === usersChoice) {
//                //console.log(func);
//                //console.log(this[func]);
//                return this[func](firstNum, secondNum);
//            }
//        }
//    }
    
    funcToPerform: function(usersFunction) {
        return usersFunction(firstNum, secondNum);
    }
}

//console.log(whichFunc.funcToPerform("add"));

var firstNum = parseInt(readline.keyIn("Please enter your first number: "));
var secondNum = parseInt(readline.keyIn("Please enter your second number: "));

var working = whichFunc.funcsArray();

var chooseFunction = readline.keyInSelect(working, "What would you like to do to your numbers?");

//console.log("The result is: ", whichFunc.funcToPerform(working[chooseFunction]));
console.log(working[chooseFunction]);
console.log(whichFunc[working[chooseFunction]])
console.log("The result is: ", whichFunc.funcToPerform(whichFunc.calculationMethods[working[chooseFunction]]));

