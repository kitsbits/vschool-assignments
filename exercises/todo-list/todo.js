document.getElementById("todo-button").addEventListener("click", function(event) {
    event.preventDefault();
    
    var newItem = document.getElementById("todo-text").value;
    
    if (newItem !== "") {
        var list = document.getElementById("todo-list");
        list.innerHTML = list.innerHTML + "<label class='checkbox-inline col-xs-1 col-xs-offset-2'><input type='checkbox' value=''></label><p class='col-xs-9 list-item'>" + newItem + "</p>";

        document.getElementById("new-todo-form").reset();
    }
});