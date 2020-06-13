
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("holds_problems_map").del()
    .then(function () {
      // Inserts seed entries
      return knex("holds_problems_map").insert([
        {
          id: 1, 
          problem_id: 1, 
          hold_id: 1, 
          wall_location: "A2"
        },
        {
          id: 2, 
          problem_id: 3, 
          hold_id: 2, 
          wall_location: "G4"
        },
        {
          id: 3, 
          problem_id: 2, 
          hold_id: 3, 
          wall_location: "A6"
        },
      ]);
    });
};
