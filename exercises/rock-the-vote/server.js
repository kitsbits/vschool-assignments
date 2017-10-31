const express = require("express");
const app = express();
const port = process.env.PORT || 9010;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

app.use("/issues", require("./routes/issues"));
// app.use("/issues/:id/comments", require("./routes/comments"));

mongoose.connect("mongodb://localhost/issues", err => {
    if (err) return err;
    console.log("Connected to the issues database");
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
