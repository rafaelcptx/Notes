const mongoose = require("mongoose");

// Config SCHEMA.
const noteSchema = new mongoose.Schema({
  title: String,
  note: String,
  priority: Boolean,
});

module.exports = mongoose.model("note", noteSchema);
