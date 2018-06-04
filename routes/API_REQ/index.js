const router = require('express').Router();
const articles = require('./article');
const notes = require('./notes');
const scrape = require('./scraper');

router.use('/scrape', scrape);
router.use('/articles', articles);
router.use('/notes', notes);

module.exports = router;
