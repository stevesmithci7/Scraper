const db = require('../models');

module.exports = {
  findAllArticles(req, res) {
    db.Articles.find(req.query)
      .sort({ date: -1 })
      .then(article => res.json(article));
  },

  renderAllArticles(req) {
    return db.Articles.find(req)
      .sort({ date: -1 })
      .then(article => article);
  },

  deleteArticle(req, res) {
    console.log(`Removed ${req.params.id}`);
    db.Articles.remove({ _id: req.params.id }).then(article => res.json(article));
  },

  updateArticle(req, res) {
    db.Articles.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true })
      .then(article => res.json(article));
  },

  renderArticleWithNote(id) {
    return db.Articles.findOne({ _id: id }).populate('notes').then(article => article);
  },
};
