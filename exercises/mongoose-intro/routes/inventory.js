const express = require("express");
const bagRoutes = express.Router();
const Bag = require("../models/bag");

bagRoutes.get("/", (req, res) => {
    Bag.find((err, bag) => {
        if (err) return res.status(500).send(err);
        return res.send(bag);
    });
});

bagRoutes.get("/:id", (req, res) => {
    Bag.findById(req.params.id, (err, bag) => {
        if (err) return res.status(500).send(err);
        return res.send(bag);
    });
});

bagRoutes.post("/", (req, res) => {
    const newBag = new Bag(req.body);
    newBag.save((err, bag) => {
        if (err) return res.status(500).send(err);
        return res.send(bag);
    });
});

bagRoutes.delete("/:id", (req, res) => {
    Bag.findByIdAndRemove(req.params.id, (err, bag) => {
        if (err) return res.status(500).send(err);
        return res.send(bag);
    });
});

bagRoutes.put("/:id", (req, res) => {
    Bag.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, bag) => {
        if (err) return res.status(500).send(err);
        return res.send(bag);
    });
});

module.exports = bagRoutes;
