const router = require('express').Router();
const article = require('../../controller/articles');

router.get('/', article.findAllArticles);
router.get('/show', article.renderArticleWithNote);
router.delete('/:id', article.deleteArticle);
router.put('/:id', article.updateArticle);

module.exports = router;
