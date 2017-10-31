const express = require("express");
const issueRoutes = express.Router();
const Issue = require("../models/issue");

issueRoutes.get("/", (req, res) => {
    Issue.find((err, allIssues) => {
        if (err) return res.status(500).send(err);
        return res.send(allIssues);
    });
});

issueRoutes.post("/", (req, res) => {
    const newIssue = new Issue(req.body);
    newIssue.save((err, createdIssue) => {
        if (err) return res.status(500).send(err);
        return res.send(createdIssue);
    });
});

issueRoutes.delete("/:id", (req, res) => {
    Issue.findByIdAndRemove(req.params.id, (err, deletedIssue) => {
        if (err) return res.status(500).send(err);
        return res.send({message: "Issue successfully deleted!"});
    });
});

issueRoutes.put("/:id", (req, res) => {
    Issue.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedIssue) => {
        if (err) return res.status(500).send(err);
        return res.send(updatedIssue);
    });
});

issueRoutes.post("/:id/comments", (req, res) => {
    Issue.findByIdAndUpdate(
        req.params.id,
        {$push: {"comments": req.body}},
        { new: true, upsert: true },
        (err, issue) => {
            if (err) return res.status(500).send(err);
            return res.send(issue);
        });
});



module.exports = issueRoutes;
