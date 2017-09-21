var phrase = 'slimy smelly solution';

//function Construct(letter, count) {
//    this.letter = letter;
//    this.count = count || 0;
//}

  

//function findFrequency(aString) {
//    var letterCounts = [];
//    var firstLetter = aString[0];
//    //console.log(firstLetter);
//    var letterCounter = new Construct(firstLetter, 0);
//    letterCounts.push(letterCounter);
//    console.log(letterCounts);
//    
//    
//    for (var i = 0; i < aString.length; i++) {
//        console.log(i);
//        console.log(letterCounts[i]);
//        var currentLetter = aString[i];
//        // var currentCount = letterCounts[i].count;
//        
//        if (letterCounts.find(function(item){return item.letter === currentLetter})) {
//            letterCounts[0].count += 1;
//        } else {
//            var letterCounter = new Construct(currentLetter, 1);
//            letterCounts.push(letterCounter);
//        }
//        
//    }
//    return letterCounts;
//}


//function findFrequency(aString) {
//    var letterCount = {};
//    var phraseArray = phrase.split("");
//    
//    phraseArray.forEach(function(letter) {
//        if (!letterCount[letter]) {
//            letterCount[letter] = 1;
//        } else {
//            letterCount[letter]++;
//        }
//    });
//    console.log(Object.keys(letterCount).join(""));
//    return letterCount;
//}
//
//console.log(findFrequency(phrase));


//var phrase = "Try it again, Kit. Get it into your damn brain.";
//
//function countFrequency(aString) {
//    var phraseArray = aString.split("");
//    var myObject = {};
//    
//    phraseArray.forEach(function(letter) {
//        if (!myObject[letter]) {
//            myObject[letter] = 1;
//        } else {
//            myObject[letter]++;
//        }
//    });
//    
//    return myObject;
//}
//
//console.log(countFrequency(phrase));



var phrase = "Aaaaaaaand, one more time for prosperity, Kit. You can do it.";

function countFrequencyAgain(aString) {
    var phraseArray = aString.split("");
    var myObject = {};
    
    phraseArray.forEach(function(letter) {
        if (!myObject[letter]) {
            myObject[letter] = 1;
        } else {
            myObject[letter]++;
        }
    });
    
    return myObject;
}

console.log(countFrequencyAgain(phrase));





































































