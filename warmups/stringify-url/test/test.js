const chai = require("chai");
const assert = chai.assert;

const stringifyURL = require("../main.js");

let endpoint = "http://localhost:8080/monkeys";

let query = {
  color: "black",
  species: "howler"
}
let queryEmpty = {
}

describe("Stringifies URL", () => {
    it("Should take an object and turn it into a query string", () => {
        assert.equal(stringifyURL(endpoint, query), "http://localhost:8080/monkeys?color=black&species=howler");
    });
    it("Should return just the endpoint if query object is empty", () => {
        assert.equal(stringifyURL(endpoint, queryEmpty), "http://localhost:8080/monkeys");
    });
})
