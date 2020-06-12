
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sends').del()
    .then(function () {
      // Inserts seed entries
      return knex('sends').insert([
        {id: 1, user: 'crush_master_08', send_date: '2017-01-07 10:00:00', attempts: 6},
        {id: 2, user: 'crush_master_08', send_date: '2018-07-07 10:00:00', attempts: 5},
        {id: 3, user: 'crimp_lord', send_date: '2020-01-01 10:00:00', attempts: 4},
        {id: 4, user: 'crimp_lord', send_date: '2017-03-21 10:00:00', attempts: 3},
        {id: 5, user: 'swing_holder', send_date: '1989-04-20 10:00:00', attempts: 2},
        {id: 6, user: 'swing_holder', send_date: '1978-03-07 10:00:00', attempts: 1}
      ]);
    });
};
