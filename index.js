const express = require('express');
const app = express();
const port = 2428;

const data = require('./shop-items.json');

const FuzzySearch = require('fuzzy-search');

// CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// all items & categories
app.get('/', (req, res) => res.json(data));

// items
app.get('/items', (req, res) => {
  let items = data.items;

  if (req.query.category && req.query.category.length > 0)
    items = data.items.filter(x =>
      req.query.category.some(y => x.categories.indexOf(y) > -1)
    );

  if (req.query.search) {
    const searcher = new FuzzySearch(data.items, ['title', 'id'], {
      sort: true,
    });

    items = searcher.search(req.query.search);
  }

  res.json(items);
});

// get specific item
app.get('/item/:itemID', (req, res) => {
  const filteredItems = data.items.filter(x => x.id === req.params.itemID);
  if (filteredItems.length > 0) res.json(filteredItems[0]);
  res.json();
});

// categories
app.get('/categories', (req, res) => res.json(data.categories));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
