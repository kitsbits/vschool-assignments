// Add functions
document.getElementById("add-button").addEventListener("click", function(event, a, b) {
    event.preventDefault();
    a = parseInt(document.getElementById("first-number-add").value);
    b = parseInt(document.getElementById("second-number-add").value);
    document.getElementById("answer-number-add").innerHTML = a + b;
});

document.getElementById("reset-button-add").addEventListener("click", function() {
    document.getElementById("answer-number-add").innerHTML = "";
});

// Subtract functions
document.getElementById("sub-button").addEventListener("click", function(event, a, b) {
    event.preventDefault();
    a = parseInt(document.getElementById("first-number-sub").value);
    b = parseInt(document.getElementById("second-number-sub").value);
    document.getElementById("answer-number-sub").innerHTML = a - b;
});

document.getElementById("reset-button-sub").addEventListener("click", function() {
    document.getElementById("answer-number-sub").innerHTML = "";
});

// Multiplication functions
document.getElementById("mult-button").addEventListener("click", function(event, a, b) {
    event.preventDefault();
    a = parseInt(document.getElementById("first-number-mult").value);
    b = parseInt(document.getElementById("second-number-mult").value);
    document.getElementById("answer-number-mult").innerHTML = a * b;
});

document.getElementById("reset-button-mult").addEventListener("click", function() {
    document.getElementById("answer-number-mult").innerHTML = "";
});