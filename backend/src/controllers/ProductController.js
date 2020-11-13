const { update } = require('../database/connection');
const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const products = await connection('products').select('*');

    return response.json(products)
  },
  async create(request, response) {
    const { barcode, name, quantity, price } = request.body;

    await connection('products').insert({
      barcode,
      name,
      quantity,
      price
    });

    return response.json({ message: 'product created' });
  },
  async delete(request, response) {
    const { id } = request.params;

    const product = await connection('products')
      .where('id', id)
      .select('id')
      .first();

    if (!product) {
      return response.status(404).json({ error: 'Product not found' });
    }

    await connection('products').where('id', id).delete();

    return response.status(204).send();

  },
  async find(request, response) {

    const { id } = request.params;

    const product = await connection('products').select('*').first().where('id', id);

    if (!product) {
      return response.status(404).json({ error: 'Product not found' });
    }

    return response.json(product)
  },
  async put(request, response) {
    const { id } = request.params;
    const { barcode, name, quantity, price } = request.body;

    await connection('products').where('id', id).update({
      barcode: barcode,
      name: name,
      quantity: quantity,
      price: price
    })

    return response.json({ message: 'product updated' })
  }
}