//The first function will take this array, and print it to the console. Make sure to add spaces in-between each word so it looks nice on the console

var lyrics = ["This", "hit", "that", "ice", "cold",
              "Michelle", "Pfeiffer", "that", "white",
              "gold", "This", "one", "for", "them",
              "hood", "girls", "Them", "good", "girls",
              "straight", "masterpieces", "Stylin'",
              "whilen'", "livin'", "it", "up", "in",
              "the", "city", "Got", "Chucks", "on",
              "with", "Saint", "Laurent", "Gotta", "kiss",
              "myself", "I'm", "so", "pretty"];

//function printThisArray(lyrics) {
//    console.log(lyrics.join(" "));
//}
//
//printThisArray(lyrics);


//The second function will do the same thing, but print the song backwards (starting with the word "pretty": "pretty so I'm myself kiss Gotta", etc.).

//function printThisArrayBackwards(lyrics) {
//    console.log(lyrics.reverse().join(" "));
//}
//
//printThisArrayBackwards(lyrics);

//The third function will print every other word to the console, i.e. "this that cold Pfeiffer", etc.

//function printEveryOtherInThisArray(lyrics) {
//    var everyOtherLyricsArray = [];
//    for (var i = 0; i < lyrics.length; i += 2) {
//        everyOtherLyricsArray.push(lyrics[i]);
//    }
//
//    console.log(everyOtherLyricsArray.join(" "));
//}
//
//printEveryOtherInThisArray(lyrics);

// Create a fourth function that reverses every two words. So the end result would look like this: "hit This ice that Michelle cold" ...

function reverseEveryOtherWord(arr) {
    var reverseEveryOtherWordArray = [];

    for (var i = 0; i < arr.length; i += 2) {
        reverseEveryOtherWordArray.push(arr[i]);
    }

    for (var i = 1; i < arr.length; i += 2) {
        var grabEveryOther = arr.slice(i, (i + 1));
        reverseEveryOtherWordArray.splice(i - 1, 0, grabEveryOther);
    }

    console.log(reverseEveryOtherWordArray.join(" "));
}

reverseEveryOtherWord(lyrics);
