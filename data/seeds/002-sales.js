
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sales').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('sales').insert([
        {vehicle_id: 2, price: 50000, sale_date: new Date()}
      ]);
    });
};
