const express = require("express");
const app = express();
const uuid = require("uuid/v4");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

let bounties = [
    {
        firstName: "Something",
        lastName: "Sith-Sounding",
        living: true,
        bounty: 1200,
        type: "Sith",
        _id: uuid()
    },
    {
        firstName: "Something",
        lastName: "Jedi-Sounding",
        living: false,
        bounty: 1700,
        type: "Jedi",
        _id: uuid()
    }
];

app.get("/bounties", (req, res) => {
    res.send(bounties);
});

app.get("/bounties/:id", (req, res) => {
    let toSend = bounties.find();
    console.log(toSend);
    res.send(toSend);
});

app.post("/bounties", (req, res) => {
    bounties.push(req.body);
    req.body._id = uuid();
    res.send(req.body);
});

app.delete("/bounties/:id", (req, res) => {
    bounties = bounties.filter((bounty) => {
        return bounty._id !== req.params.id;
    });
    res.send("Successfully removed!");
});

app.put("/bounties/:id", (req, res) => {
    // with the id find object in DB and alter it with req.body
    bounties = bounties.map(bounty => {
        if (taco._id === req.params.id) {
            return req.body = Object.assign(bounty, req.body);
        } else {
            return bounty;
        }
    });
    //
});

app.listen(8001, () => {
    console.log("Server running on port 8001");
});
