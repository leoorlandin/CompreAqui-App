const express = require('express');
const ProductController = require('./controllers/ProductController');

const routes = express.Router();

routes.get('/', ProductController.index);
routes.post('/product/create', ProductController.create);
routes.get('/product/:id', ProductController.show);
routes.put('/product/:id/edit', ProductController.put);
routes.delete('/product/:id/edit', ProductController.delete);

module.exports = routes;

