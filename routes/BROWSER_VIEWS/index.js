const router = require('express').Router();
const { renderAllArticles, renderArticleWithNote } = require('../../controller/articles');

router.get('/', (req, res) => {
  renderAllArticles(req.query).then((dbres) => {
    const hbsObject = {
      article: dbres,
    };
    res.render('index', hbsObject);
  });
});

router.get('/show/:id', (req, res) => {
  renderArticleWithNote(req.params.id).then((dbres) => {
    const hbsObject = {
      header: 'viewNotes',
      url: dbres.url,
      heading: dbres.heading,
      text: dbres.text,
      notes: dbres.notes,
    };
    console.log(hbsObject);
    res.render('articleview', hbsObject);
  });
});

module.exports = router;
