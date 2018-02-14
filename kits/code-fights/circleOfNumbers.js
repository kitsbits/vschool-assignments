function circleOfNumbers(n, firstNumber) {
    let nDivByTwo = (n / 2);
    if (firstNumber + nDivByTwo === n) {
        return 0;
    } else if (firstNumber + nDivByTwo > n - 1) {
        return (firstNumber + nDivByTwo) % n;
    }
    return nDivByTwo += firstNumber;
}

console.log(circleOfNumbers(10, 7));
