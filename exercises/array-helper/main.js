var cars = ["truck", "van", "sedan"];

// 1 \\
/* Use .forEach() to replace the following for loop.

for (var i = 0; i < cars.length; i++) {  
  console.log(`${cars[i]} goes vroom`);
}

*/


cars.forEach(function(car) {
    console.log(car + " goes vroom")
});



// 2 \\
/*

Use .map() to replace the following for loop.

var angryCars = [];

for (var i = 0; i < cars.length; i++) {  
  angryCars.push(cars[i].toUpperCase());
}

*/

var angryCars = [];

cars.map(function(car) {
    var upperCar = car.toUpperCase();
    angryCars.push(upperCar);
});

console.log(angryCars);



// 3 \\
/*

Use .filter() to replace the following for loop.

var newCars = [];

for (var i = 0; i < cars.length; i++) {  
  if (cars[i].year > 2005){
    newCars.push(cars[i]);
  }
}

*/

var carsToo = [  
    {make: "Ford", model: "E150", price: 10000},
    {make: "Chevy", model: "Camaro", price: 20010},
    {make: "Toyota", model: "Tacoma", price: 30900},
    {make: "Ford", model: "Explorer", price: 9000},
    {make: "Ford", model: "F250", price: 2400},
]

var priceyCars = carsToo.filter(function(car) {
    return car.price >= 10000;
});

console.log(priceyCars);


// 4 \\
/*

Use .find() to replace the following for loop.

for (var i = 0; i < cars.length; i++) {  
  if (cars[i].make === "E150"){
    var coolVan = cars[i];
    break;
  }
}

*/

var theVan = carsToo.find(function(car) {
    return car.model === "E150";
});

console.log(theVan)


// 5 \\
/*

Use .some() to replace the following for loop.

for (var i = 0; i < cars.length; i++) {  
  if (cars[i].make === "E150"){
    console.log("There is one or more E150s");
    break;
  }
}

*/

var isThereAVan = carsToo.some(function(car) {
   return car.model === "E150"; 
});

if (isThereAVan) {
    console.log("There is one or more E150s.");
}


// 6 \\
/*

Use .every() to replace the following for loop.

for (var i = 0; i < cars.length; i++) {  
  if (cars[i].make != "E150"){
    console.log("Not every car is an E150");
    break;
  }
}

*/


var isEveryCarAVan = carsToo.every(function(car) {
   return car.model === "E150"; 
});

if (!isEveryCarAVan) {
    console.log("Not every car is an E150.");
}




// 7 \\
/*

var numberOfFords = 0;  
var numberOfChevys = 0;

for (var i = 0; i < cars.length; i++) {  
  if (cars[i].model === "ford"){
    numberOfFords ++;
  }
  if (cars[i].model === "chevy"){
    numberOfchevys ++;
  }
}

var carTotals = { numberOfFords: numberOfFords, numberOfchevys: numberOfchevys }

*/

var carTypes = carsToo.reduce(function(previous, car) {
    if (car.make === "Ford") previous.Fords++;
    if (car.make === "Chevy") previous.Chevys++;
    return previous;
    
}, {Fords: 0, Chevys: 0});

console.log(carTypes);