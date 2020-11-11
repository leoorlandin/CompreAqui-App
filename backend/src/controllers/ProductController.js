const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
  async index(request, response) {
    const products = await connection('products').select('*');

    return response.json(products)
  },
  async create(request, response) {
    const { barcode, name, quantity, price } = request.body;


    const id = crypto.randomBytes(4).toString('HEX');

    await connection('products').insert({
      barcode,
      name,
      quantity,
      price
    });

    return response.json({ id });
  }
}