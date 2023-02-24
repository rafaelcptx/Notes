const Note = require("../models/Note");

module.exports = {
  async read(req, res) {
    const priority = req.query;

    const priorityNotes = await Note.find(priority);
    return res.json(priorityNotes);
  },

  async update(req, res) {
    const { id } = req.params;

    const note = await Note.findOne({ _id: id });

    if (note.priority) {
      note.priority = false;
    } else {
      note.priority = true;
    }

    await note.save();

    return res.send(`Updated note: ${note}`);
  },
};
