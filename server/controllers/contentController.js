const Note = require("../models/Note");

module.exports = {
  async update(req, res) {
    const { id } = req.params;
    const { note } = req.body;

    const updatedNote = await Note.findOne({ _id: id });

    if (note) {
      updatedNote.note = note;

      await updatedNote.save();
    }

    return res.json(updatedNote);
  },
};
