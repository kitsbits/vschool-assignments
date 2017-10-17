// Generate a random number.
// If the number is divisible 3, divide it by 3
// If it's not, either add 1 or subtract 1 (to make it divisible by 3), then divide it by 3
// Repeat this process until you reach "1"

function gameOfThrees(num) {
    let counter = 0;
    while (num > 1) {
        if (num % 3 === 0) {
            counter++;
            num = num / 3;
        } else if ((num + 1) % 3 === 0) {
            counter++;
            num = (num + 1) / 3;
        } else if ((num - 1) % 3 === 0) {
            counter++;
            num = (num - 1) / 3;
        }
    }
    return counter;
}

console.log(gameOfThrees(5)) // 2
console.log(gameOfThrees(15)) // 3
