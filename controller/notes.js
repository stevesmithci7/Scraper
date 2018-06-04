const db = require('../models');

module.exports = {
  findNotes(req, res) {
    db.Notes.find({ articleId: req.params.id }).then((dbNote) => {
      res.json(dbNote);
    });
  },

  createNote(req, res) {
    db.Notes.create(req.body)
      .then(dbNote =>
        db.Articles.findOneAndUpdate(
          { _id: dbNote.articleId },
          { $push: { notes: dbNote._id } },
          { new: true },
        ))
      .then(res => console.log(res));
  },

  deleteNote(req, res) {
    db.Notes.remove({ _id: req.params.id }).then((dbNote) => {
      res.json(dbNote);
    });
  },
};
