const express = require('express');
const ProductController = require('./controllers/ProductController');

const routes = express.Router();

routes.get('/', ProductController.index);
routes.post('/create', ProductController.create);
// routes.delete('/', ProductController.delete);

module.exports = routes;

