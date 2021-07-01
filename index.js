//dependency
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
//imports
const Port = process.env.PORT || 5000;
const ConnectDB = require("./config/DbConfig");
const authRoute = require("./routes/auth");
const notesRoute = require("./routes/noteRouter");
const { errorHandler, notFound } = require("./middlewares/errorMiddleware");

// db config
ConnectDB();

//middlewares
app.use(express.json());
app.use(cors());

//Routes
app.use("/api/auth", authRoute);
app.use("/api/notes", notesRoute);


// Error Handling middlewares
app.use(errorHandler);
app.use(notFound);

// server listen
app.listen(Port, () => {
  console.log(`Server is Running on:${Port}`);
});
