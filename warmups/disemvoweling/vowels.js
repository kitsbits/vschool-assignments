const str = "Did this work kfjd skdj f d s a";

const disemvowel = str => {
    const newStr = str.replace(/[ \t]/g, "").toLowerCase();
    let disemvoweled = "";
    let vowels = "";
    for (let i = 0; i < newStr.length; i++) {
        const current = newStr[i];
        if (current === "a" || current === "e" || current === "i" || current === "o" || current === "u") {
            vowels += current;
        } else {
            disemvoweled += current;
        }
    }
    return {
        disemvoweled,
        vowels
    }
    // DALLIN'S
    // newObj = {}
    // const noVowels = str.replace(/[aeiou\s/]/gi,'');
    // const vowels = str.replace(/[^aeiou]/gi, '');
    // newObj.str = noVowels.toLowerCase();
    // newObj.vowels = vowels.toLowerCase();
    // return newObj;
}
console.time("disemvowel");
for (let i = 0; i < 10000; i++) {
    disemvowel(str);
}
console.timeEnd("disemvowel");

console.log(disemvowel(str));
