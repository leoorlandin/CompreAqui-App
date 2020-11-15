const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    let { filter } = request.query;
    let totalQuery = await connection('products').select('*');

    if (filter) {
      totalQuery = await connection('products').select('*').where('name', 'like', `${filter}%`);
    }

    return response.json(totalQuery)
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
  async show(request, response) {

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
}