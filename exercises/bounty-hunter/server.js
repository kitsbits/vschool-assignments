const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use("/bounties", require("./routes/bountyRoutes"));

app.listen(8002, () => {
    console.log("Server running on port 8002");
});
