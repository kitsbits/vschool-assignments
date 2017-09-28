// Turn an array of numbers into a total of all the numbers

function total(arr) {
    var result = arr.reduce(function (total, current) {
        return total += current;
    }, 0);
    return result;
}

console.log(total([1, 2, 3])); // 6 


// Turn an array of numbers into a long string of all those numbers.

function stringConcat(arr) {
    var result = arr.reduce(function (total, current) {
        return total += current;
    }, "");
    return result;
}

console.log(stringConcat([1, 2, 3])); // "123"

//  Turn an array of voter objects into a count of how many people voted

var voters = [  
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function totalVotes(arr) {
    return arr.reduce(function (total, current) {
        return current.voted ? total + 1 : total;
    }, 0);
}

console.log(totalVotes(voters)); // 7


// Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

// outliers
    // same item ends up on there twice?

function shoppingSpree(arr) {
//    var eachItemOnlyOnce = arr.reduce(function(total, current, i) {
//        var next = arr[i + 1];
//        console.log(next[0]);
//        //return total += current.title !== next.title;
//    }, []);
//    return eachItemOnlyOnce;
    var result = arr.reduce(function(total, current) {
        return total + current.price;
    }, 0);
    return result;
}

var wishlist = [  
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist)); // 227005 


//Given an array of arrays, flatten them into a single array

function flatten(arr) {
    return arr.reduce(function (total, current) {
        return total.concat(current);
    }, []);
}


var arrays = [  
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6]; 


// Given an array of voters, return an object representing the results of the vote, including how many of the voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges voted.


var voters = [  
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
    var result = arr.reduce(function (total, current) {
        if (current.age < 26) {total.youth++};
        if (current.age < 26 && current.voted) {total.youngVotes++};
        if (current.age > 25 && current.age < 36) {total.mids++}
        if (current.age > 25 && current.age < 36 && current.voted) {total.midVotes++}
        if (current.age > 35) {total.olds++}
        if (current.age > 35 && current.voted) {total.oldVotes++}
        return total;
    }, {youngVotes: 0, youth: 0, midVotes: 0, mids: 0, oldVotes: 0, olds: 0});
    return result;
}

console.log(voterResults(voters)); // Returned value shown below:  
/*
{ youngVotes: 1,
  youth: 4,
  midVotes: 3,
  mids: 4,
  oldVotes: 3,
  olds: 4 
}
*/










