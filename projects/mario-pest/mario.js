// Goombas
document.getElementById("goomba-total-button").addEventListener("click", function(a, b) {
    if (typeof a === "undefined" || typeof b === "undefined") {
        alert("Please enter the number of this pest that were caught");
    } else {
        a = parseInt(document.getElementById("goomba-caught").value);
        b = parseInt(document.getElementById("goomba-price").innerHTML);
        document.getElementById("goomba-total").innerHTML = a * b; 
    }
});

// Bob-ombs
document.getElementById("bomb-total-button").addEventListener("click", function(a, b) {
    if (typeof a === "undefined" || typeof b === "undefined") {
        alert("Please enter the number of this pest that were caught");
    } else {
        a = parseInt(document.getElementById("bomb-caught").value);
        b = parseInt(document.getElementById("bomb-price").innerHTML);
        document.getElementById("bomb-total").innerHTML = a * b; 
    }
});

// Cheep-cheeps
document.getElementById("cheep-total-button").addEventListener("click", function(a, b) {
    if (typeof a === "undefined" || typeof b === "undefined") {
        alert("Please enter the number of this pest that were caught");
    } else {
        a = parseInt(document.getElementById("cheep-caught").value);
        b = parseInt(document.getElementById("cheep-price").innerHTML);
        document.getElementById("cheep-total").innerHTML = a * b; 
    }
});

// Total
document.getElementById("total-button").addEventListener("click", function(a, b, c) {
    if (typeof a === "undefined" || typeof b === "undefined" || typeof c === "undefined") {
        alert("Please enter the number for all pests caught before trying to totally total");
    } else {
        a = parseInt(document.getElementById("goomba-total").innerHTML);
        b = parseInt(document.getElementById("bomb-total").innerHTML);
        c = parseInt(document.getElementById("cheep-total").innerHTML);
        document.getElementById("sum-total").innerHTML = a + b + c; 
    }
});
