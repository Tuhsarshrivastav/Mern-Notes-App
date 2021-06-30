const mongoose = require("mongoose");

const ConnectDB = async () => {
  try {
    const response = await mongoose.connect(process.env.DB, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("---Mongodb--Connected---");
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = ConnectDB;
