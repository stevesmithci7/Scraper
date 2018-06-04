const db = require('../models');
const NewYorkScrape = require('../scrape/scraperino');

module.exports = {
  controlledScrape(req, res) {
    return NewYorkScrape()
      .then(articles => db.Articles.create(articles))
      .then(articles => res.json(articles));
  },
};
