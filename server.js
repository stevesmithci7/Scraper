const express = require('express');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const routes = require('./routes/');

const PORT = process.env.PORT || 6969;

const app = express();

app.use(express.static('public'));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/MongoScrape';

mongoose.connect(MONGODB_URI);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
