const add = require("./add");
const subtract = require("./subtract").subtract;
const multAndDiv = require("./multAndDiv");
const exponentiate = require("./exponentiate").exponentiate;

const calculator = (a, b, operation) => {
    switch(operation) {
        case "add":
            return add(a, b);

        case "subtract":
            return subtract(a, b);

        case "multiply":
            return multAndDiv.multiply(a, b);

        case "divide":
            return multAndDiv.divide(a, b);

        case "exponentiate":
            return exponentiate(a, b);

        default:
            console.log(`Please provide two numbers and tell the calcuator to "add", "subtract", "multiply", "divide", or "exponentiate"`);
    }
}

console.log(calculator(1,2,"add"));
console.log(calculator(1,2,"subtract"));
console.log(calculator(1,2,"multiply"));
console.log(calculator(1,2,"divide"));
console.log(calculator(2,2,"exponentiate"));
