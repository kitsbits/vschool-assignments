const express = require("express");
const Lego = require("../models/legos");
const expressJwt = require("express-jwt");
const settings = require("../settings");

const legoRouter = express.Router();

const auth = expressJwt({secret: settings.secret});
legoRouter.use(auth);

legoRouter.route("/")
    .get((req, res) => {
        Lego.find(Object.assign({user: req.user._id}, req.query), (err, legos) => {
            if (err) return res.status(500).send(err);
            return res.status(200).send(legos);
        });
    })
    .post((req, res)  => {
        let lego = new Lego(req.body);
        lego.user = req.user._id;
        lego.save((err, newLego) => {
            if (err) return res.status(500).send(err);
            return res.status(201).send(newLego);
        })
    });

legoRouter.route("/:legoId")
    .get((req, res) => {
        Lego.findById(req.params.legoId,  (err, lego) => {
            if (err) return res.status(500).send(err);
            if (!lego) return res.status(404).send("No lego item found.");
            return res.status(200).send(lego);
        });
    })
    .put((req, res) => {
        Lego.findByIdAndUpdate(req.params.legoId, req.body, {new: true}, (err, lego) => {
            if (err) return res.status(500).send(err);
            return res.status(200).send(lego);
        });
    })
    .delete((req, res) => {
        Lego.findByIdAndRemove(req.params.legoId,
 (err, lego) => {
            if (err) return res.status(500).send(err);
            return res.status(200).send(lego);
        })
    });

module.exports = legoRouter;
