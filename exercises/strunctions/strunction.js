function marioUp(aString) {
    var livesArray = aString.split("");
    var upMariosLivesArray = livesArray.map(function(item){
        return item + "Up"
    });
    
    return upMariosLivesArray;
}

console.log(marioUp("12345"));


// FIX

//function learnToReplace(aString) {
//    
//    for (var j = 0; j < aString.length; j++) {
//        var aStringIddied = aString.toLowerCase().replace(aString[j], "iddy");
//        aStringIddied.replace("i", "I");
//    }
//    return aStringIddied;
//}
//
//console.log(learnToReplace("Is this is going to be very difficult to read."));

var aString = "This is a string!";

console.log(aString.slice(3));