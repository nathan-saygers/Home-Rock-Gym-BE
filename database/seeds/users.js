
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'crush_master_08'},
        {id: 2, username: 'crimp_lord'},
        {id: 3, username: 'swing_holder'}
      ]);
    });
};
