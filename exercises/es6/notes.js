// can't reassign a constant
// CANNOT DO:
const name = "Kit";
name = "Badass"; // <-- cannot rename a constant

// use 'const' as often as I can and use 'let' whenever const won't work

// Exporting

module.exports = {
    add, //<-- will find something with that same name
    sub, //<-- will find something with that same name
    mul, //<-- will find something with that same name
}

// Spread operator
const someStuff = ["al;kjsdf", "a;lkjdsf", "lkjasdf"];
const moreStuff = ["qwpoeiur", "qwepoiur", "qweporiu"];
const combinedStuff = [...someStuff, ...moreStuff];
    // only two dimensional
function flattenArray(arr) {
    return [].concat(...arr);
}
    // can't do Math.max(nums) bc Math.max() expects numbers not an array
const nums = [1,2,3,4,5,6,7,8,9];
const largest = Math.max(...nums);

// Functions
const speak = name => { // <-- don't need () to pass in ONE parameter (here: name) -- zero or 2+, still need () \\ ALSO: these don't get hoisted because they're declared
    console.log(`Hi, my name is ${name}`);
}

// => has implicit return if no {}
const voted = voters.filter(voter => voter.voted);

// can't use () => when you need a "this" <-- requires function keyword to maintain the context for "this"

// Constructor functions
class Person {
    constructor(name, address, phone) {
        this.name = name;
        this.address = address;
        this.phone = phone;
    }
    speak() {
        console.log(`My name is: ${this.name}, my address is: ${this.address}, and my phone number is: ${this.phone}`);
    }
}

// creating objects the same
const kit = new Person("Kit", "242 Elmhurst", "412-721-1526");
kit.speak();
