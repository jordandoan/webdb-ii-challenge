
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {vin:"2VHEF6", make:'Honda',model:'Civic',mileage:'200000'},
        {vin:"32312311VHEF6", make:'Toyota',model:'Camry',mileage:'10000'},
        {vin:"42312311VHEF6", make:'Jeep',model:'Wrangler',mileage:'250000'},
        {vin:"52312311VHEF6", make:'Ford',model:'Explorer',mileage:'30000'},
      ]);
    });
};
