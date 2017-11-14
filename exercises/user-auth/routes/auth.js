const express = require("express");
const passport = require("passport");
const Strategy = require("passport-local");
const jwt = require("jsonwebtoken");
const settings = require("../settings");

const User = require("../models/user");
const authRouter = express.Router();

passport.use(new Strategy((usernameAttempt, passwordAttempt, done) => {
    User.findOne({username: usernameAttempt}, (err, currentUser) => {
        if (err) {
            done(err, false);
        } else if (currentUser === null) {
            done(null, false);
        } else {
            currentUser.auth(passwordAttempt, isCorrect => {
                done(null, isCorrect);
            });
        }
    });
}));

authRouter.use(passport.initialize());

authRouter.post("/login", passport.authenticate("local", {session: false}), (req, res) => {
    User.findOne({username: req.body.username}, (err, user) => {
        if (err) {
            res.status(500).send({
                success: false,
                err
            });
        } else if (user === null) {
            res.status(404).send({
                success: false,
                err: "That user does not exist"
            });
        } else {
            res.status(201).send({
                success: true,
                user: user.withoutPassword(),
                token: jwt.sign(user.withoutPassword(), settings.secret, {
                    expiresIn: 60 * 30 * 24
                });
            });
        }
    });
});

authRouter.post("/signup", (req, res) => {
    User.findOne({username: req.body.username}, (err, existingUser) => {
        console.log(existingUser);
        if (err) {
            return res.status(500).send({
            success: false,
            err
            });
        } else if (existingUser !== null) {
            return res.status(400).send({
            success: false,
            err: "Sorry, this username already exists"
            });
        } else {
            let newUser = new User(req.body);
            newUser.save((err, savedUser) => {
                if (err) return res.status(500).send({
                    sucess: false,
                    err
                });
                return res.status(201).send({
                    success: true,
                    savedUser
                });
            });
        }
    });
});


module.exports = authRouter;
