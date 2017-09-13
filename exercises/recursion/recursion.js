function factorial(n) {
    if (n === 0) {
        return 1;
    }
    
    var toMultiply = n;
    for (var i = n - 1; i > 0; i--) {
        toMultiply *= i;
    }
    return toMultiply;
}

console.log(factorial(5));