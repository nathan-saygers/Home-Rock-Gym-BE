
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sends').del()
    .then(function () {
      // Inserts seed entries
      return knex('sends').insert([
        {id: 1, user_id: 1, problem_id: 2, send_date: '2017-01-07 10:00:00', attempts: 6, notes: 'wo so fun'},
        {id: 2, user_id: 1, problem_id: 1, send_date: '2018-07-07 10:00:00', attempts: 5, notes: 'wo so fun'},
        {id: 3, user_id: 2, problem_id: 3, send_date: '2020-01-01 10:00:00', attempts: 4, notes: 'wo so fun'},
        {id: 4, user_id: 2, problem_id: 2, send_date: '2017-03-21 10:00:00', attempts: 3, notes: 'wo so fun'},
        {id: 5, user_id: 3, problem_id: 4, send_date: '1989-04-20 10:00:00', attempts: 2, notes: 'wo so fun'},
        {id: 6, user_id: 3, problem_id: 1, send_date: '1978-03-07 10:00:00', attempts: 1, notes: 'wo so fun'}
      ]);
    });
};
