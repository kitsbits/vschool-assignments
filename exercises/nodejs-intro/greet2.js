// add a function express as a property of module.exports
module.exports.greet = function() {
    console.log("hello, from greet2");
}

module.exports.puppies = function() {
    console.log("WOOF!");
}

// OR
// function puppies() {
//     console.log("WOOF!");
// }
//
// function greet() {
//     console.log("hello, from greet2");
// }
//
// module.exports = {
//     puppies,
//     greet
// }
