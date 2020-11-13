const express = require('express');
const ProductController = require('./controllers/ProductController');

const routes = express.Router();

routes.get('/', ProductController.index);
routes.get('/product/:id', ProductController.find);
routes.post('/product/create', ProductController.create);
routes.put('/product/:id/edit', ProductController.put);
routes.delete('/product/:id', ProductController.delete);

module.exports = routes;

