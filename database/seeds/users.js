
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, username: 'crush_master_08'},
        {id: 2, username: 'crimp_lord'},
        {id: 3, username: 'swing_holder'}
      ]);
    });
};
