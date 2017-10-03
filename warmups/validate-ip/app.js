/////// FASTER \\\\\\\\\\\
//const validId = (string) => {
//    const splitStringAtDots = string.split(".");
//
//    if (splitStringAtDots.length !== 4) {
//        return false;
//    }
//
//    const toNumbers = [];
//
//    splitStringAtDots.forEach((str) => {
//        if (isNaN(Number(str))) {
//            console.log("working");
//        } else {
//            return toNumbers.push(str);
//        }
//    });
//    
//    if (toNumbers.length !== 4) {
//        return false;
//    }
//
//    const tooBigOrSmall = (number) => {
//        return number < 0 || number > 255;
//    };
//
//    var foundTooBigOrSmall = toNumbers.findIndex(tooBigOrSmall);
//
//    if (foundTooBigOrSmall !== -1) {
//        return false;
//    }
//    return true;
//}


/////// MORE SUCCINCT/READABLE \\\\\\\\\\\
const validId = (str) => {
    const toArray = str.split(".");
    if (toArray.length !== 4) {
        return false;
    }
    return toArray.every(strToNum => {
        const num = Number(strToNum);
        return num >= 0 && num <= 255
    });
};

module.exports = validId;
