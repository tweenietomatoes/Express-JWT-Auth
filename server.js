const express = require("express");
require("dotenv").config();

const routes = require('./routes');

const app = express();

PORT = process.env.PORT;

app.use(express.json());

app.use("/v1/", routes);

app.listen(PORT, () => console.log(`Server is running on {PORT}`) );
