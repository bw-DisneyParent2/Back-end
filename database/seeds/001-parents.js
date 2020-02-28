
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('parents')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('parents').insert([
        {id: 1, email: 'Chris@daley.com', password: 'PassWord1'},
        {id: 2, email: 'kylee@daley.com', password: 'PassWord2'},
        {id: 3, email: 'Leo@daley.com', password: 'PassWord3'},
      ]);
    });
};