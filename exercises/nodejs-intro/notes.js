// NodeJS \\
// MODULE PATTERNS \\
    // set module.exports to a function expressions
    const greet1 = require("./greet1");
    greet1();

    // add a function express as a property of module.exports
    // const greet2 = require("./greet2");
    const greet2 = require("./greet2").puppies;
    greet2();
    // greet2.greet();


    // exporting of a constructor
    const Person = require("./person");
    const sammy = new Person("Sammy", 42);
    sammy.speak();
