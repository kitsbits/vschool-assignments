const express = require("express");
const bountyRoutes = express.Router();
const uuid = require("uuid/v4");

let bounties = [
    {
        firstName: "Something",
        lastName: "Sith-Sounding",
        living: "T",
        bounty: 1200,
        type: "Sith",
        _id: uuid()
    },
    {
        firstName: "Something",
        lastName: "Jedi-Sounding",
        living: "F",
        bounty: 1700,
        type: "Jedi",
        _id: uuid()
    }
];

bountyRoutes.get("/", (req, res) => {
    console.log(req.query);
    let filteredBounties = bounties.filter(docs => {
        for (let key in req.query) {
            if (String(docs[key]) !== req.query[key]) {
                return false;
            }
        }
        return true;
    })
    res.send(filteredBounties);
});

bountyRoutes.get("/:id", (req, res) => {
    let toSend = bounties.find();
    console.log(toSend);
    res.send(toSend);
});

bountyRoutes.post("/", (req, res) => {
    bounties.push(req.body);
    req.body._id = uuid();
    res.send(req.body);
});

bountyRoutes.delete("/:id", (req, res) => {
    bounties = bounties.filter((bounty) => {
        return bounty._id !== req.params.id;
    });
    res.send("Successfully removed!");
});

bountyRoutes.put("/:id", (req, res) => {
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

module.exports = bountyRoutes;
