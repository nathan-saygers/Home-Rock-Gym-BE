
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('favorited_problems').del()
    .then(function () {
      // Inserts seed entries
      return knex('favorited_problems').insert([
        {id: 1, user: 1, problem_id: 1},
        {id: 2, user: 1, problem_id: 2},
        {id: 3, user: 2, problem_id: 3},
        {id: 4, user: 3, problem_id: 4},
      ]);
    });
};
