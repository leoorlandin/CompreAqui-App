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
  // async delete(request, response){
  //   return 
  // }
}