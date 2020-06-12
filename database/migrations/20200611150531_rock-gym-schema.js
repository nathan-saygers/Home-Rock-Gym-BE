
exports.up = function(knex) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments();
    tbl.string("username", 128)
      .unique()
      .notNullable();
    tbl.integer("saved_problems")
    tbl.integer("projects")
  })
  .createTable("appointments", tbl => {
    tbl.increments();
    tbl.integer("user")
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE")
    tbl.datetime("climb_date", options={useTz: false})
  })
  .createTable("sends", tbl => {
    tbl.increments();
    tbl.integer("user")
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE")
    tbl.datetime("send_date", options={useTz: false})
  })
  .createTable("problems", tbl => {
    tbl.increments();
    tbl.integer("user")
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE")
    tbl.string("grade")
      .notNullable()
    tbl.integer("angle")
    tbl.str("photo")
  })
};

exports.down = function(knex) {
  
};
