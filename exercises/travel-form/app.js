document.getElementById("submitForm").addEventListener("click", function () {
    var firstName = "First Name: " + document.travelForm.firstName.value;
    var newLine = "\n";
    var lastName = "Last Name: " + document.travelForm.lastName.value;
    var gender = "Gender: " + document.travelForm.gender.value;
    var destination = "Destination: " + document.travelForm.selectDestination.value;
    var food = function () {
        var length = document.travelForm.restrictions.length;
        var foodArray = [];
        for (var i = 0; i < length; i++) {
            if (document.travelForm.restrictions[i].checked) {
                foodArray.push(document.travelForm.restrictions[i].value);
            }
        }
        document.travelForm.reset();
        var returnString = foodArray.join(", ")
        return "Dietary restrictions: " + returnString;
    };

    if (document.travelForm.selectDestination.value === "") {
        alert("Please choose a destination");
    } else {
        alert(firstName + newLine + lastName + newLine + gender + newLine + destination + newLine + food());
    }

});
