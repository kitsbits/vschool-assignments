/////// DISPLAY FUNCTIONS \\\\\\\\
const getList = () => {
    axios.get("https://api.vschool.io/kit/todo").then((response) => {
        const todoList = response.data;
        todoList.forEach((currentTodo) => {
            const editId = currentTodo._id;
            const thisTitle = currentTodo.title;
            const thisDescription = currentTodo.description;
            const thisPrice = parseInt(currentTodo.price);

            $("#todo-list").append(`
        <div id=${editId} class="grab-edit-id">
            <div class="each-todo-container">
                <i id="checkbox" class="fa fa-circle-o fa-lg checkbox"></i>
                <input id="title" class="each-todo-title" value="${thisTitle}" disabled>
            </div>
            <div id="description" class="description-container">
                <div class="subtitles">
                    <p class="inline">Description</p>
                    <div class="inline price-container">
                        <p class="inline">PRICE:</p>
                        <input id="price" type="number" class="inline price-text" value="${thisPrice}" disabled>
                    </div>
                </div>
                <textarea id="description-text" class="description-text" disabled>${thisDescription}</textarea>
            </div>
            <div class="edit-container">
                <p id="edit" class="edit">EDIT</p>
                <p id="delete" class="delete" onclick="deleteItem('${editId}')">DELETE</p>
            </div>
        </div>
            `);
        });
    });
};


////// EVENT LISTENERS \\\\\\\

$("#add-button").click(function () {
    const newTitle = $("#new-title").val();
    const newPrice = $("#new-price").val();
    const newDescription = $("#new-description").val();

    const newTodo = {
        title: newTitle,
        price: newPrice,
        description: newDescription
    }

    axios.post("https://api.vschool.io/kit/todo", newTodo).then((response) => {
        $("#add-item")[0].reset();
        getList();
    });
});


///// DELETE \\\\\
// ADDED AS ONCLICK ON EACH #DELETE \\
const deleteItem = (id) => {
    axios.delete(`https://api.vschool.io/kit/todo/${id}`).then((response) => {
        $(`#${id}`).remove();
    })
}


///// EDIT \\\\\\
// ADDED AS ONCLICK ON EACH #EDIT \\
const editItem = (id) => {
    const editedTitle = $("#new-title").val();
    const editedPrice = $("#new-price").val();
    const editedDescription = $("#new-description").val();

    const newTodo = {
        title: newTitle,
        price: newPrice,
        description: newDescription
    }
    axios.put(`https://api.vschool.io/kit/todo/${id}`).then((response) => {

    });
}


$(document).ready(() => {
    getList();
    //    document.getElementById("header").style.background = "url('https://source.unsplash.com/daily?mountain') no-repeat center";
//    document.getElementById("header").style.backgroundSize = "cover";
});

