const express = require("express");
const bountyRoutes = express.Router();
const uuid = require("uuid/v4");

let bounties = [
    {
        firstName: "SOMETHING",
        lastName: "SITH-SOUNDING",
        living: "T",
        bounty: 1200,
        type: "SITH",
        _id: "e6246090-24e3-44e9-bfc1-89dfee51b63c"
    },
    {
        firstName: "SOMETHING",
        lastName: "JEDI-SOUNDING",
        living: "F",
        bounty: 1700,
        type: "JEDI",
        _id: "0911e09a-7327-433b-9a23-fba219249e04"
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
    const toSend = bounties.find(bounty => {
        return bounty._id === req.params.id
    });
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
