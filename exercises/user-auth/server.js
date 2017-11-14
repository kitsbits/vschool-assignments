//index.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
// const path = require("path");
const cors = require("cors");

//import routes

//connect to db
mongoose.connect("mongodb://localhost/legos-auth-example");

//base express app
const app = express();

//setup cors
app.use(cors());

//setup JSON requests
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//setup logging
app.use(morgan("dev"));

app.use("/legos", require("./routes/legos"));
app.use("/auth", require("./routes/auth"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`[+] Starting server on port ${PORT}`);
});
