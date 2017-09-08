var shopper = {
    firstName: "Kathy",
    lastName: "Myers",
    familySize: 4,
    mainShopper: true,
    groceryCart: [
        "mushrooms",
        "sandwich bread",
        "cheese",
        "eggs",
        "milk"
    ],
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

console.log(shopper.fullName());
