// Goombas
document.getElementById("goomba-total-button").addEventListener("click", function(a, b) {
    a = parseInt(document.getElementById("goomba-caught").value);
    b = parseInt(document.getElementById("goomba-price").innerHTML);
    console.log(a);
    
    if (isNaN(parseFloat(a))) {
        console.log(a);
        alert("Please enter the number of this pest that were caught");
    } else {
        document.getElementById("goomba-total").innerHTML = a * b; 
    }
});

// Bob-ombs
document.getElementById("bomb-total-button").addEventListener("click", function(a, b) {
    a = parseInt(document.getElementById("bomb-caught").value);
    b = parseInt(document.getElementById("bomb-price").innerHTML);
    
    if (a === NaN) {
        alert("Please enter the number of this pest that were caught");
    } else {
        document.getElementById("bomb-total").innerHTML = a * b; 
    }
});

// Cheep-cheeps
document.getElementById("cheep-total-button").addEventListener("click", function(a, b) {
    a = parseInt(document.getElementById("cheep-caught").value);
    b = parseInt(document.getElementById("cheep-price").innerHTML); 
    
    if (a === NaN) {
        alert("Please enter the number of this pest that were caught");
    } else {
        document.getElementById("cheep-total").innerHTML = a * b; 
    }
});

// Total
document.getElementById("total-button").addEventListener("click", function(a, b, c) {
    a = parseInt(document.getElementById("goomba-total").innerHTML);
    b = parseInt(document.getElementById("bomb-total").innerHTML);
    c = parseInt(document.getElementById("cheep-total").innerHTML);
    
    if (a === NaN || b === NaN || c === NaN) {
        alert("Please enter the number for all pests caught before trying to totally total");
    } else {
        document.getElementById("sum-total").innerHTML = a + b + c; 
    }
});
