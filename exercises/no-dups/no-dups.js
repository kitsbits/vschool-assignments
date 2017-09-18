//function noDups(aString) {
//    var goodArray = aString.split("");
//    var evilArray = [];
//    
//    for (var i = goodArray.length - 1; i > 0; i--) {    
//        if (goodArray[i] === goodArray[i - 1]) {
//            evilArray.unshift(goodArray[i]);
//            goodArray.splice((i), 1);
//        }
//    }
//    
//    console.log("No Duplicates:", goodArray.join(""), "\nThe Misfits: ", evilArray.join("")); 
//}
//
//noDups("Does ...  Thhhhiiis     woooorrrkkkk");



// CLEVER from Dylgar
//function duplicates(str) {
//    var unique = "";
//    
//    for ( i < str.length) {
//        if (str.lastIndexOf(str[i]) === str.indexOf(str.[i])) {
//            unique += str[i];
//        }
//    }
//    return unique;
//}
