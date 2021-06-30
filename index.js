//dependency
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

//imports
const Port = process.env.PORT || 5000;
const ConnectDB = require("./config/DbConfig");
const notes = require("./data/notes");
const authRoute = require("./routes/auth");
const { errorHandler, notFound } = require("./middlewares/errorMiddleware");

// db config
ConnectDB();

//middlewares
app.use(express.json());
app.use(cors());

//Routes
app.use("/api/auth", authRoute);
app.get("/api/notes", (req, res) => {
  res.json(notes);
});
app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((p) => p._id === req.params.id);
  res.send(note);
});

// Error Handling middlewares
app.use(errorHandler);
app.use(notFound);

// server listen
app.listen(Port, () => {
  console.log(`Server is Running on:${Port}`);
});
