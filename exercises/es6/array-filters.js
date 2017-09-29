/// PRACTICE FILTER METHOD USING ES6 \\\

// Filter all numbers out of the array that are odd 

function evensOnly(arr) {
    return arr.filter(each => each % 2 === 0);
}

evensOnly([3, 6, 8, 2]); /// [6, 8, 2] 




// Filter all numbers out of the array that are less than 5

function fiveAndGreaterOnly(arr) {
    return arr.filter(each => each > 5);
}

fiveAndGreaterOnly([3, 6, 8, 2]); /// [6, 8]  




// Filter all strings out of the array that are less than 5 characters long

function fiveCharactersAndLessOnly(arr) {
    return arr.filter(each => each.length > 5);
}

fiveCharactersAndLessOnly(["dog", "wolf", "by", "family", "eaten", "camping"]); // ["by", "dog", "wolf", "eaten"]  



// Filter out all the people who do not belong to the club

function peopleWhoBelongToTheIlluminati(arr){
    return arr.filter(each => each.member);
}

peopleWhoBelongToTheIlluminati([  
  {
    name: "Angelina Jolie",
    member: true
  },{
    name: "Eric Jones",
    member: false
  },{
    name: "Paris Hilton",
    member: true
  },{
    name: "Kayne West",
    member: false
  },{
    name: "Bob Ziroll",
    member: true
  }
]);



// Filter out all the people who are not old enough to see 'The Matrix' (18)

function ofAge(arr){
    return arr.filter(each => each.age > 18);
}

console.log(ofAge([  
  {
    name: "Angelina Jolie",
    age: 80
  },{
    name: "Eric Jones",
    age: 2
  },{
    name: "Paris Hilton",
    age: 5
  },{
    name: "Kayne West",
    age: 16
  },{
    name: "Bob Ziroll",
    age: 100
  }
]));








