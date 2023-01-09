const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const { Provider } = require("../models/provider");

// Connection URI to mongoDB
const uri = "mongodb://127.0.0.1:27017/provider_db";

// Making the db connection (asynchronously)
mongoose
  .connect(uri, {
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log(
      `MongoDB database connected to the host: ${result.connection.host}`
    );
  })
  .catch((error) => console.log(error));

module.exports = Provider;
