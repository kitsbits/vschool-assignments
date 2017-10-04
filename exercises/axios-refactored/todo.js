/////// DISPLAY FUNCTIONS \\\\\\\\
const getList = () => {
    axios.get("https://api.vschool.io/kit/todo").then((response) => {
        const theTodos = response.data;
        $("#todo-list").html("");
        theTodos.forEach(function (todo, i) {
            let editId = response.data[i]._id;

            $("#todo-list").append(`
                <form id=${editId} class="each-todo-container">
                    <i name="checkbox" class="fa fa-circle-o fa-lg checkbox"></i>
                    <input name="title" class="each-todo-title" value="${todo.title}" disabled>
                </div>
                <div name="description" class="description-container">
                    <div class="subtitles">
                        <p class="inline">Description</p>
                        <div class="inline price-container">
                            <p class="inline">PRICE:</p>
                            <input name="price" type="number" class="inline price-text" value=${todo.price} disabled>
                        </div>
                    </div>
                    <textarea name="description-text" class="description-text" disabled>${todo.description}</textarea>
                </div>
                <div class="edit-container">
                    <button name="edit" type="button" class="edit">EDIT</button>
                    <button name="delete" type="button" class="delete">DELETE</button>
                </form>
            `);
        });
        $("#delete").click(deleteItem);
    });
};

////// EVENT LISTENERS \\\\\\\
/// ADD \\\
$("#add-button").click(function () {
    const addTodo = $("#add-item")["0"];

    const newTodo = {
        title: addTodo.newTitle.value,
        price: addTodo.newPrice.value,
        description: addTodo.newDescription.value
    }

    axios.post("https://api.vschool.io/kit/todo", newTodo).then((response) => {
        $("#add-item")[0].reset();
        getList();
    });
});


/// DELETE \\\
//const deleteItem = (id) => {
//    axios.delete(`https://api.vschool.io/kit/todo/${id}`).then((response) => {
//        $(`#${id}`).remove();
//    })
//}

const deleteItem = (event) => {
    const target = event.target;
//    const deleteId = $("#delete").closest("form").prop("id");
    console.log(target);
}

const working = () => {
    console.log("working");
}

/// EDIT \\\\
//const editItem = (id) => {
//    if 
//    
//    const editedTitle = $("#new-title").val();
//    const editedPrice = $("#new-price").val();
//    const editedDescription = $("#new-description").val();
//
//    const newTodo = {
//        title: newTitle,
//        price: newPrice,
//        description: newDescription
//    }
//    axios.put(`https://api.vschool.io/kit/todo/${id}`).then((response) => {
//
//    });
//}


$(document).ready(() => {
    getList();
    //    document.getElementById("header").style.background = "url('https://source.unsplash.com/daily?mountain') no-repeat center";
    //    document.getElementById("header").style.backgroundSize = "cover";
});
