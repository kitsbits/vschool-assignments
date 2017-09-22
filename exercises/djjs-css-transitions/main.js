document.getElementById("box").addEventListener("mouseover", function () {
    document.getElementById("box").style.backgroundColor = "blue";
    document.getElementById("box").style.border = "0px solid white";
    document.getElementById("box").style.borderRadius = "50%";
    document.getElementById("box").innerHTML = "";
});

document.getElementById("box").addEventListener("mousedown", function () {
    document.getElementById("box").style.backgroundColor = "red";
    document.getElementById("box").style.boxShadow = "2px 5px 5px #d3d3d3";
});

document.getElementById("box").addEventListener("mouseup", function () {
    document.getElementById("box").style.backgroundColor = "yellow";
});

document.getElementById("box").addEventListener("dblclick", function () {
    document.getElementById("box").style.backgroundColor = "green";
    document.getElementById("box").style.border = "2px solid dimgrey";
});

document.addEventListener("mousewheel", function () {
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.border = "0px solid white";
    document.getElementById("box").style.borderRadius = "50%";
    document.getElementById("box").innerHTML = "";
});
