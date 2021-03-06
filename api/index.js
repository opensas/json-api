const app = require('express')();
const { v4 } = require('uuid');

const db = require("./db")

const cors = require('cors');
app.use(cors({
    origin: '*'
}));

app.get('/api', (req, res) => {
  const path = `/api/item/${v4()}`;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});

app.get('/api/item/:slug', (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
});

app.get('/api/plans/:slug', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  const { slug } = req.params;
  const plan = db[slug]
  if (!plan) return res.status(404).json({ status: 404, message: 'plan not found'})
  res.json(plan)
  res.end()
});

module.exports = app;
