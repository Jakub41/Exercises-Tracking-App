const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(morgan("combined"));

app.use((req, res) => {
    res.status(200).send(req.originalUrl);
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
