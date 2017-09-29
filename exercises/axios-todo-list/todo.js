function getList() {
    axios.get("https://api.vschool.io/kit/todo").then(function (response) {
        var theTodos = response.data;
        var theList = document.getElementById("todo-list");

        theTodos.forEach(function (todo, i) {
            var checkboxId = "checkbox" + i;
            var titleId = "title" + i;
            var descriptionId = "description" + i;
            theList.innerHTML += `
            <div class="each-todo-container">
                <div id=${checkboxId} class="checkbox" name="checkbox" onclick="crossOffList('${checkboxId}', '${titleId}', '${descriptionId}')"></div>
                <label id=${titleId} class="each-todo-title">${todo.title}</label>
            </div>

            <div id=${descriptionId} class="description-container">
                <div class="subtitles">
                <p class="inline">Description</p>
                <div class="inline price-container">
                    <p class="inline">PRICE:</p>
                    <p class="inline price-text">$150</p>
                </div>
                </div>
                <p class="description-text">;lkajds;khfsd  alkdjf;alksd jf;lkja dsf</p>
            </div>`;

        });
    })
}

function crossOffList(checkboxId, titleId, descriptionId) {
    var currentCheckbox = document.getElementById(checkboxId);
    var backgroundColor = window.getComputedStyle(currentCheckbox, null).getPropertyValue("background-color");
    console.log(backgroundColor);
    if (backgroundColor === "rgb(255, 165, 0)") {
        currentCheckbox.setAttribute('style', 'background-color: rgb(249, 249, 249); height: 30px; width: 30px; border-radius: none; transition: all 1s;');
        document.getElementById(titleId).setAttribute('style', 'text-decoration: none');
        document.getElementById(descriptionId).setAttribute("style", "visibility: visible;")
    } else {
        currentCheckbox.setAttribute('style', 'background-color: orange; height: 30px; width: 30px; border-radius: 30px; transition: all 1s;');
        document.getElementById(titleId).setAttribute('style', 'text-decoration: line-through');
        document.getElementById(descriptionId).setAttribute("style", "visibility: hidden; height: 0; overflow: hidden;")
    }

}

function addNewItem() {
    axios.post("https://api.vschool.io/kit/todo", {title: "test"}).then(function (response) {
        console.log(response.data);
    })
}

window.onload = function () {
    getList();
    
    document.getElementById("add-button").addEventListener("click", addNewItem);
    
    document.getElementById("header").style.background = "url('https://source.unsplash.com/daily') no-repeat center";
document.getElementById("header").style.backgroundSize = "cover";
    
};
