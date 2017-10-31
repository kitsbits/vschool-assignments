const express = require("express");
const app = express();
const port = process.env.PORT || 8030;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/bags", err => {
    if (err) throw err;
    console.log("Connected to the database");
});

app.use("/bags", require("./routes/inventory"));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
