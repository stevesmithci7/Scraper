const scrapeIt = require('../node_modules/scrape-it');

function NewYorkScrape() {
  return scrapeIt('http://www.nytimes.com', {
    articles: {
      listItem: '.theme-summary',
      data: {
        heading: {
          selector: '.story-heading',
          convert: x => x.trim(),
        },
        text: {
          selector: '.summary',
          convert: x => x.replace(/\s\r\n/g, ' '),
        },
        url: {
          selector: '.story-heading a',
          attr: 'href',
        },
      },
    },
  }).then(({ data }) => data.articles.filter(e => e.text.length > 1));
}

module.exports = NewYorkScrape;
