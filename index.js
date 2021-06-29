//dependency
require("dotenv").config();
const express = require("express");
const app = express();

//imports
const Port = process.env.PORT || 5000;

// db config

//middlewares
app.use(express.json());

//Routes

// server listen
app.listen(Port, () => {
  console.log(`Server is Running on:${Port}`);
});
