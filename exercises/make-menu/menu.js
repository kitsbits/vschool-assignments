/*
You're making a restaurant, so you need a menu. Make an array of three
object literal items for dishes on your menu. Then make a constructor
 function and add 3 more items to your menu.
 */

var menu = [
    {
        item: "Chicken Salad Sando",
        price: "$7.49",
        description: "This is some chicken"
    },
    {
        item: "Chicken Salad Salad",
        price: "$8.49",
        description: "This is some chicken"
    },
    {
        item: "Chicken Parm",
        price: "$9.49",
        description: "This is some chicken"
    },
];

function MenuItem(item, price, description) {
    this.item = item;
    this.price = price;
    this.description = description;
}

var fried = new MenuItem("Fried Chicken", "$9.49", "This is some chicken");
var piccata = new MenuItem("Chicen Piccata", "$11.49", "This is some chicken");
var grilled = new MenuItem("Grilled Chicken", "This is some chicken");

menu.push(piccata);


for (var i = 0; i < menu.length; i++) {
    var eachHTMLItem = '<div class=""><br><h3 class="item">' + menu[i].item + '</h3><br><p class="price">' + menu[i].price + '</p><br><p class="price">'+ menu[i].description +'</p></div>';
    document.getElementById("insert-to-menu").innerHTML += eachHTMLItem;
}
