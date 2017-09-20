function factorial(n) {
    // with recursion
    // base case
    if (n === 1) {
        return 1;
    }
    
    // recursive function call
    // must bring closer to base case
    return n * factorial(n-1);
    
    
    // without recursion
//    var product = 1;
//    for (var i = 2; i <= n; i++) {
//        product *= i;
//    }
//    return product;
}