const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SchemaDeArticle = new Schema({
  heading: {
    type: String,
    required: true,
    unique: true,
  },

  text: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
    unique: true,
  },
  notes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Notes',
    },
  ],
});

const Articles = mongoose.model('Articles', SchemaDeArticle);

module.exports = Articles;
