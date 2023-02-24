const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const connection = mongoose
  .connect(
    "mongodb+srv://dbUser:dbPassword@cluster0.co9uqcb.mongodb.net/notes?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(console.log("Conectado ao DB com sucesso!"));

module.exports = connection;
