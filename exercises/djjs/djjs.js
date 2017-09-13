document.getElementById("the-square").addEventListener("mouseover", function() {
    this.setAttribute("style", "background-color: blue; border: 0px solid white;");
    this.innerHTML = "";
});

document.getElementById("the-square").addEventListener("mousedown", function() {
    this.style.backgroundColor = "red"; 
});

document.getElementById("the-square").addEventListener("mouseup", function() {
    this.style.backgroundColor = "yellow"; 
});

document.getElementById("the-square").addEventListener("dblclick", function() {
    this.style.backgroundColor = "green"; 
});


document.addEventListener("mousewheel", function() {
    document.getElementById("the-square").style.backgroundColor = "orange"; 
    //console.log("working");
});

// key events
document.addEventListener("keydown", function(event) {
    if (event.which === 89) {
      document.getElementById("the-square").style.backgroundColor = "yellow"; 
    }
});

document.addEventListener("keydown", function(event) {
    if (event.which === 71) {
        document.getElementById("the-square").style.backgroundColor = "green";
    } 
});

document.addEventListener("keydown", function(event) {
    if (event.which === 66) {
        document.getElementById("the-square").style.backgroundColor = "blue";
    }
});

 document.addEventListener("keydown", function(event) {
    if (event.which === 79) {
            document.getElementById("the-square").style.backgroundColor = "orange";
    }
});

 document.addEventListener("keydown", function(event) {
    if (event.which === 82) {
            document.getElementById("the-square").style.backgroundColor = "red";
    }
});
 