exports.up = function(knex) {
  return knex.schema.createTable('products', function (table) {
    table.string('id').primary();
    table.integer('barcode').notNullable();
    table.string('name').notNullable();
    table.string('quantity').notNullable();
    table.decimal('price').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('products');
};
