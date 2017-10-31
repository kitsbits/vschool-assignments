const express = require("express");
const app = express();
const port = process.env.PORT || 9010;
const mongoose = require("mongoose");
const Issue = require("./models/issue");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/issues", err => {
    if (err) return err;
    console.log("Connected to the issues database");
})

app.get("/", (req, res) => {
    Issue.find((err, allIssues) => {
        if (err) return res.status(500).send(err);
        return res.send(allIssues);
    });
});

app.post("/", (req, res) => {
    console.log(req.body)
    const newIssue = new Issue(req.body);
    newIssue.save((err, createdIssue) => {
        if (err) return res.status(500).send(err);
        return res.send(createdIssue);
    });
});

app.delete("/:id", (req, res) => {
    Issue.findByIdAndRemove(req.params.id, (err, deletedIssue) => {
        if (err) return res.status(500).send(err);
        return res.send({message: "Issue successfully deleted!"});
    });
});

app.put("/:id", (req, res) => {
    Issue.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedIssue) => {
        if (err) return res.status(500).send(err);
        console.log(req.body)
        console.log(updatedIssue)
        return res.send(updatedIssue);
    });
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})
