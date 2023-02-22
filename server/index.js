const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ name: "Alguem" });
});

app.listen(3030, () => {
  console.log("servidor rodando.");
});
