var timeLeft = 3;

function countDown() {
    document.getElementById("time").innerHTML = timeLeft;
    timeLeft--;
    if (timeLeft === 0) {
        document.getElementById("time").innerHTML = "This is it. The end of the world is here.";
        clearInterval(set);
    }
}

var set = setInterval(countDown, 1000);
