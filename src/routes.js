const express = require('express');

const routes = express.Router();

routes.get('/', function(req, res) {
    res.send('Hello, hello, hello, how low');
  });

routes.post('/users', (req, res) => {
    return res.json(req.body);
});

module.exports = routes;