var mLives = [1, 2, 3, 4, 5];

var mLivesUp = mLives.map(function(life){
    return life + "Up";
});

console.log(mLivesUp.join(" "));