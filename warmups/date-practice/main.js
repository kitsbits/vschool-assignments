// function daysAgo(n) {
//     const today = new Date();
//     const calcDaysAgo = today - 1000 * 60 * 60 * 24 * n;
//     const daysAgo = new Date(calcDaysAgo);
//     const month = daysAgo.getMonth() + 1;
//     const day = daysAgo.getDate();
//     const year = daysAgo.getFullYear();
//
//     return `${month}/${day}/${year}`;
//
// }

function daysAgo(n) {
    const today = new Date();
    today.setDate(today.getDate() - n);
    return today.toDateString();

}

console.log(daysAgo(100));
console.log(daysAgo(3));
