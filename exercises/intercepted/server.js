const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const utils = require("./utils");

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(utils.boo);


app.get("/", (req, res) => {
});

const port = process.env.PORT || 8020;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
