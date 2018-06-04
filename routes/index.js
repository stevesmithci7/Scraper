const router = require('express').Router();
const calls = require('./API_REQ');
const views = require('./BROWSER_VIEWS');

router.use('/api', calls);
router.use('/', views);

module.exports = router;
