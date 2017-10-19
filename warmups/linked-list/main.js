function linkedList(n) {
    if (n === 0)
        return {next: null, value: n}

    return {
        next: linkedList(n - 1),
        value: n
    }
}

console.log(linkedList(3));

// let output = {
//     next: {
//         next: {
//             next: null,
//             value: 2
//         },
//         value: 1
//     },
//     value: 0
// }

// if end --> next = null, value = n - 1
// else --> next = {}
