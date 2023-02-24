const Note = require("../models/Note");

module.exports = {
  // Read function. ///////////////////////////// READ /////////////////////////////////////////
  async read(req, res) {
    const notesList = await Note.find();
    return res.json(notesList);
  },

  // Create function. ///////////////////////////// CREATE /////////////////////////////////////
  async create(req, res) {
    const { title, note, priority } = req.body;

    if (!note || !title) {
      return res
        .status(400)
        .json({ error: "Title and Note are needed fields." });
    }

    const createdNote = await Note.create({
      title: title,
      note: note,
      priority: priority,
    });

    return res.send(`Created note: ${createdNote}`);
  },

  // Delete function ///////////////////////////// DELETE /////////////////////////////////////
  async delete(req, res) {
    const { id } = req.params;
    const deletedNote = await Note.findOneAndDelete({ _id: id });

    if (deletedNote) {
      return res.send(`Deleted note: ${deletedNote}`);
    }

    return res.status(401).json({ error: "This ID note was not found." });
  },
};
