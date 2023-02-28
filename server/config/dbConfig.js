const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", true);
const connection = mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Conectado ao DB com sucesso!"));

module.exports = connection;
