const express = require('express');
const cors = require('cors');

const articles = require('./articles');

const app = express();
app.use(cors());  // needed for AJAX requests

/**
 * GET / endpoint.
 */
app.get('/', (req, res) => {
  res.end('Next.js SSG vs SSR backend server.');
});

/**
 * GET /articles endpoint.
 */
app.get('/articles', (req, res) => {
  // simulating 1 second latency
  setTimeout(() => {
    res.json(articles);
  }, 1000);
});

module.exports = app;
