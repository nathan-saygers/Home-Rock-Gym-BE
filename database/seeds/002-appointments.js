
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('appointments').del()
    .then(function () {
      // Inserts seed entries
      return knex('appointments').insert([
        {id: 1, user: 1, climb_date: '2017-01-07 10:00:00'},
        {id: 2, user: 1, climb_date: '2018-07-07 10:00:00'},
        {id: 3, user: 2, climb_date: '2020-01-01 10:00:00'},
        {id: 4, user: 2, climb_date: '2017-03-21 10:00:00'},
        {id: 5, user: 3, climb_date: '1989-04-20 10:00:00'},
        {id: 6, user: 3, climb_date: '1978-03-07 10:00:00'}
      ]);
    });
};
