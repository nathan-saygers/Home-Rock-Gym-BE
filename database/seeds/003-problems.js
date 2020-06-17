
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("problems").del()
    .then(function () {
      // Inserts seed entries
      return knex("problems").insert([
        {
          id: 1, 
          problem_name: "the Reaper",
          setter: 2,
          grade: "vHard",
          angle: 45,
          photo: "www.thisisaphotolink.com",
          created_at: "2017-01-07 10:00:00",
          is_hidden: false
        },
        {
          id: 2, 
          problem_name: "triangle face",
          setter: 3,
          grade: "V7",
          angle: 25,
          photo: "www.thisisaphotolink.com",
          created_at: "2010-01-07 05:20:30",
          is_hidden: false
        },
        {
          id: 3, 
          problem_name: "Gut Crunch",
          setter: 1,
          grade: "V5",
          angle: 15,
          photo: "www.thisisaphotolink.com",
          created_at: "2018-06-23 10:00:00",
          is_hidden: false
        },
        {
          id: 4, 
          problem_name: "lil crimpers",
          setter: 3,
          grade: "VB",
          angle: 90,
          photo: "www.thisisaphotolink.com",
          created_at: "2019-01-17 10:00:00",
          is_hidden: false
        },
      ]);
    });
};
