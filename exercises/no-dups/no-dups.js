function noDups(aString) {
    var goodArray = aString.split("");
    var evilArray = [];
    
    for (var i = goodArray.length; i > 0; i--) {    
        if (goodArray[i] === goodArray[i + 1]) {
            console.log(i);
            evilArray.unshift(goodArray[i]);
            goodArray.splice((i), 1);
        }
    }
    
    var goodString = goodArray.join("");
    var evilString = evilArray.join("");
    
    console.log("No duplicates: " + goodString + "\nThe Misfits: " + evilString); 
}

noDups("Dollllesworkkkk");