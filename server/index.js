// Configs Server Express.
const express = require("express");
const app = express();
const routes = require("./routes");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(routes);

// Configs DATABASE - MongoDB.
require("./config/dbConfig");

app.listen(3030, () => {
  console.log("servidor rodando.");
});
