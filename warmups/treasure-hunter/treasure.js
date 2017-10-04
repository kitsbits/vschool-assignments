const findRepeats = str => {
    return str.replace(/[^\w\s]/gi, "").split(" ").filter((eachWord, i, newArray) => newArray.indexOf(eachWord) !== newArray.lastIndexOf(eachWord)).filter((word, index, nextArray) => index === nextArray.indexOf(word));
    
}

console.log(findRepeats("Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever drinking the right vinegar fanny pack pull minim right chicharrones migas."));