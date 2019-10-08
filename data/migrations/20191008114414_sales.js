
exports.up = function(knex, Promise) {
  return knex.schema.createTable('sales', tbl => {
    tbl.increments();
    tbl.integer('vehicle_id').unique().notNullable();
    tbl.foreign('vehicle_id').references('cars.id')
    tbl.decimal('price').notNullable();
    tbl.date('sale_date').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('sales');
};
