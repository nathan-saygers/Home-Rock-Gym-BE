
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("holds").del()
    .then(function () {
      // Inserts seed entries
      return knex("holds").insert([
        {
          id: 1, 
          size: "small",
          name: "meatlet", 
          type: "crimp", 
          photo: "www.thisisaphotolink.com"
        },
        {
          id: 2, 
          size: "large",
          name: "big triangle", 
          type: "volume", 
          photo: "www.thisisaphotolink.com"
        },
        {
          id: 3, 
          size: "medium",
          name: "thank god jug", 
          type: "jug", 
          photo: "www.thisisaphotolink.com"
        },
      ]);
    });
};
