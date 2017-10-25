const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const uuid = require("uuid/v4");

app.use(bodyParser.json());

const tacos = [
    {
        title: "Chicken",
        price: 2.95,
        _id: "d222fa9d-51aa-4640-9b9d-09410f337f78"
    },
    {
        title: "Double-stuffed Birthday Surprise",
        price: 3.95,
        _id: "8bb24a36-03e1-4b09-8295-5e659ff252a8"
    },
    {
        title: "Fish",
        price: 2.95,
        _id: "d344f5dc-a171-4984-8b57-91ce73a3bd2d"
    }
]


app.get("/tacos", (req, res) => {
    res.send(tacos);
});

app.post("/tacos", (req, res) => {
    let taco = req.body;
    taco._id = uuid();
    tacos.push(taco);
    res.send(taco);
});

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
