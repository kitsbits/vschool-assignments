const express = require("express");
const commentRoutes = express.Router();
const Issue = require("../models/issue");

// commentRoutes.post("/", (req, res) => {
//     console.log(req.params.id);
//     Issue.findByIdAndUpdate(
//         req.params.id,
//         {$push: {comments: req.body}},
//         { new: true },
//         (err, issue) => {
//             if (err) return res.status(500).send(err);
//             return res.send(issue);
//         });
//     // Issue.findById(req.params.id, (err, issue) => {
//     //         res.send(req.body);
//     //     // if (err) return res.status(500).send(err);
//     //     // issue.comments.push(req.body);
//     //     // issue.save();
//     //     // return res.send(issue);
//     // });
// });

module.exports = commentRoutes;
