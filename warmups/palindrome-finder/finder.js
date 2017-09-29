function isPalindrome(string) {
    var simpString = string.toLowerCase().replace(/\W/g, "");
    
    return simpString.split("").reverse().join("") === simpString;
}

module.exports = isPalindrome;
