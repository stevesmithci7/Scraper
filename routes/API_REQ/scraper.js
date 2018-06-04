const router = require('express').Router();

const scrape = require('../../controller/scrape.controller');

router.get('/', scrape.controlledScrape);

module.exports = router;
