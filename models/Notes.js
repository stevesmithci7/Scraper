const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const noterino = new Schema({
  articleId: {
    type: Schema.Types.ObjectId,
    ref: 'Article',
  },
  content: String,
  submitted: {
    type: Date,
    default: Date.now,
  },
});

const Notes = mongoose.model('Notes', noterino);

module.exports = Notes;
