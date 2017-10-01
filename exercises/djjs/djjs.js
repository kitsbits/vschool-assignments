const theSquare = document.getElementById("the-square");

theSquare.addEventListener("mouseover", function() {
    this.setAttribute("style", "background-color: blue; border: 0px solid white;");
    this.innerHTML = "";
});

theSquare.addEventListener("mousedown", function() {
    this.style.backgroundColor = "red"; 
});

theSquare.addEventListener("mouseup", function() {
    this.style.backgroundColor = "yellow"; 
});

theSquare.addEventListener("dblclick", function() {
    this.style.backgroundColor = "green"; 
});


document.addEventListener("mousewheel", function() {
    theSquare.style.backgroundColor = "orange"; 
    //console.log("working");
});

// key events

document.addEventListener("keydown", function(event) {
    if (event.which === 71) {
        theSquare.style.backgroundColor = "green";
    } else if (event.which === 66) {
        theSquare.style.backgroundColor = "blue";
    } else if (event.which === 79) {
        theSquare.style.backgroundColor = "orange";
    } else if (event.which === 82) {
        theSquare.style.backgroundColor = "red";
    } else if (event.which === 89) {
        theSquare.style.backgroundColor = "yellow"; 
    }
});
 