const theList = document.getElementById("todo-list");
const addButton = document.getElementById("add-button");

const getList = () => {
    axios.get("https://api.vschool.io/kit/todo").then(function (response) {
        const theTodos = response.data;
        theList.innerHTML = "";

        theTodos.forEach(function (todo, i) {
            let checkboxId = "checkbox" + i;
            let titleId = "title" + i;
            let descriptionId = "description" + i;
            let descriptionTextId = "description-text" + i;
            let deleteId = response.data[i]._id;
            let editId = "edit" + i;
            let priceId = "price" + i;

            theList.innerHTML += `
        <div class="each-todo-container">
            <i id=${checkboxId} class="fa fa-circle-o fa-lg checkbox" name="checkbox" onclick="crossOffList('${checkboxId}', '${titleId}', '${descriptionId}', '${editId}', '${deleteId}')"></i>
            <input id=${titleId} class="each-todo-title" value="${todo.title}" disabled>
        </div>
        <div id=${descriptionId} class="description-container">
            <div class="subtitles">
                <p class="inline">Description</p>
                <div class="inline price-container">
                    <p class="inline">PRICE:</p>
                    <input id=${priceId} type="number" class="inline price-text" value=${todo.price} disabled>
                </div>
            </div>
            <textarea id=${descriptionTextId} class="description-text" disabled>${todo.description}</textarea>
        </div>
        <div class="edit-container">
            <p id=${editId} class="edit" onclick="editItem('${editId}', '${descriptionTextId}', '${deleteId}', '${titleId}', '${priceId}')">EDIT</p>
            <p id=${deleteId} class="delete" onclick="deleteItem('${deleteId}')">DELETE</p>
        </div>
        
        `;

        });
    })
};

const deleteItem = (deleteId) => {
    axios.delete(`https://api.vschool.io/kit/todo/${deleteId}`).then((response) => getList());
}

const editItem = (editId, descriptionTextId, deleteId, titleId, priceId) => {

    const descriptionToEdit = document.getElementById(descriptionTextId);
    const thisEdit = document.getElementById(editId);
    const thisPrice = document.getElementById(priceId);
    const thisTitle = document.getElementById(titleId);

    if (descriptionToEdit.hasAttribute("disabled")) {
        descriptionToEdit.removeAttribute("disabled");
        thisTitle.removeAttribute("disabled");
        thisPrice.removeAttribute("disabled");
        thisEdit.innerHTML = "UPDATE";
        thisPrice.classList.add("editing-styles");
        descriptionToEdit.classList.add("editing-styles");
        thisTitle.classList.add("editing-styles");
        

        thisEdit.addEventListener("click", () => {
            const editedTitle = document.getElementById(titleId).value;
            const editedDescription = document.getElementById(descriptionTextId).value;
            const editedPrice = document.getElementById(priceId).value;


            const editedItem = {
                title: editedTitle,
                description: editedDescription,
                price: editedPrice
            };
            axios.put(`https://api.vschool.io/kit/todo/${deleteId}`, editedItem).then((response) => {
                getList();
            });
        })
        console.log(descriptionToEdit.hasAttribute("disabled"));

    } else {
        descriptionToEdit.setAttribute("disabled", "true");
        thisTitle.setAttribute("disabled", "true");
        thisPrice.setAttribute("disabled", "true");
        thisEdit.innerHTML = "EDIT";
        thisPrice.classList.remove("editing-styles");
        descriptionToEdit.classList.remove("editing-styles");
        thisTitle.classList.remove("editing-styles");
    }
}

const crossOffList = (checkboxId, titleId, descriptionId, editId, deleteId) => {
    const currentCheckbox = document.getElementById(checkboxId);
    const currentTitle = document.getElementById(titleId);
    const currentDescription = document.getElementById(descriptionId);
    const currentEdit = document.getElementById(editId);
    const currentDelete = document.getElementById(deleteId);
    const fontColor = window.getComputedStyle(currentTitle, null).getPropertyValue("color");

    if (fontColor === "rgb(78, 69, 56)") {
        currentCheckbox.setAttribute('style', 'color: rgb(255, 165, 0); transition: all 1s;');
        currentCheckbox.classList.remove("fa-circle-o");
        currentCheckbox.classList.add("fa-check-circle-o");
        currentTitle.setAttribute('style', 'color: rgb(255, 165, 0); text-decoration: line-through; transition: all 1s;');
        currentDescription.setAttribute("style", "height: 0; overflow: hidden; transition: all 1s;");
        currentEdit.setAttribute("style", "visibility: hidden;");
        currentDelete.setAttribute("style", "margin-top: -5px;");
    } else {
        currentCheckbox.setAttribute('style', 'color: rgb(78, 69, 56); transition: all 1s;');
        currentCheckbox.classList.remove("fa-check-circle-o");
        currentCheckbox.classList.add("fa-circle-o");
        currentTitle.setAttribute('style', 'text-decoration: none transition: all 1s;');
        currentDescription.setAttribute("style", "height: auto; transition: all 1s;");
        currentEdit.setAttribute("style", "visibility: visible;");
        currentDelete.removeAttribute("style", "margin-top");
    }

}

const addNewItem = (newTodo) => {
    axios.post("https://api.vschool.io/kit/todo", newTodo).then((response) => getList());
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
    document.getElementById("add-item").reset();    

});


window.onload = function () {
    getList();

    document.getElementById("header").style.background = "url('https://source.unsplash.com/daily') no-repeat center";
    document.getElementById("header").style.backgroundSize = "cover";

};