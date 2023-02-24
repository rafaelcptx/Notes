const express = require("express");
const routes = express.Router();
const NoteController = require("./controllers/noteController");
const priorityController = require("./controllers/priorityController");

// Route: localhost:porta/notes.
routes.get("/notes", NoteController.read);
routes.post("/notes", NoteController.create);
routes.delete("/notes/:id", NoteController.delete);

// Route: localhost:porta/priorities.
routes.get("/priorities", priorityController.read);
routes.post("/priorities/:id", priorityController.update);

module.exports = routes;
