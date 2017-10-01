const theList = document.getElementById("todo-list");
const addButton = document.getElementById("add-button");

const getList = () => {
    axios.get("https://api.vschool.io/kit/todo").then(function (response) {
        const theTodos = response.data;

        theTodos.forEach(function (todo, i) {
            let checkboxId = "checkbox" + i;
            let titleId = "title" + i;
            let descriptionId = "description" + i;
            let deleteId = response.data[i]._id;;
            let editId = "edit" + i;

            theList.innerHTML += `            
                <div class="edit-container">
                    <i id="${deleteId}" class="fa fa-times fa-2x delete-icon" onclick="deleteItem('${deleteId}')"></i>
                    <i id="${editId}" class="fa fa-pencil-square-o fa-2x edit-icon"></i>
                </div>            
                <div class="each-todo-container">                
                <i id=${checkboxId} class="fa fa-circle-o fa-lg checkbox" name="checkbox" onclick="crossOffList('${checkboxId}', '${titleId}', '${descriptionId}', '${editId}')"></i>
                <label id=${titleId} class="each-todo-title">${todo.title}</label>
            </div>
            <div id=${descriptionId} class="description-container">                
                <div class="subtitles">
                <p class="inline">Description</p>
                <div class="inline price-container">
                    <p class="inline">PRICE:</p>
                    <p class="inline price-text">${todo.price}</p>
                </div>
                </div>
                <p class="description-text">${todo.description}</p>
            </div>`;

        });
    })
}

const deleteItem = (deleteId) => {
    axios.delete(`https://api.vschool.io/kit/todo/${deleteId}`);
}

const crossOffList = (checkboxId, titleId, descriptionId, editId) => {
    const currentCheckbox = document.getElementById(checkboxId);
    const currentTitle = document.getElementById(titleId);
    const currentDescription = document.getElementById(descriptionId);
    const currentEditIcon = document.getElementById(editId);
    const fontColor = window.getComputedStyle(currentTitle, null).getPropertyValue("color");

    if (fontColor === "rgb(78, 69, 56)") {
        currentCheckbox.setAttribute('style', 'color: rgb(255, 165, 0); transition: all 1s;');
        currentCheckbox.classList.remove("fa-circle-o");
        currentCheckbox.classList.add("fa-check-circle-o");
        currentTitle.setAttribute('style', 'color: rgb(255, 165, 0); text-decoration: line-through; transition: all 1s;');
        currentDescription.setAttribute("style", "height: 0; overflow: hidden; transition: all 1s;");
        currentEditIcon.setAttribute("style", "visibility: hidden;");
    } else {
        currentCheckbox.setAttribute('style', 'color: rgb(78, 69, 56); transition: all 1s;');
        currentCheckbox.classList.remove("fa-check-circle-o");
        currentCheckbox.classList.add("fa-circle-o");
        currentTitle.setAttribute('style', 'text-decoration: none transition: all 1s;');
        currentDescription.setAttribute("style", "height: auto; transition: all 1s;");
        currentEditIcon.setAttribute("style", "visibility: visible;");
    }

}

const addNewItem = (newTodo) => {
    axios.post("https://api.vschool.io/kit/todo", newTodo).then((response) => console.log(response.data));
}

addButton.addEventListener("click", () => {
    const addItem = document.getElementById("add-item");
    const newTitle = addItem.newTitle.value;
    const newDescription = addItem.newTodoDescription.value;
    const newPrice = addItem.newTodoPrice.value;

    let newTodo = {
        title: newTitle,
        description: newDescription,
        price: newPrice
    };
    addNewItem(newTodo);

});




window.onload = function () {
    getList();

    //    document.getElementById("add-button").addEventListener("click", addNewItem);

    document.getElementById("header").style.background = "url('https://source.unsplash.com/daily') no-repeat center";
    document.getElementById("header").style.backgroundSize = "cover";

};
