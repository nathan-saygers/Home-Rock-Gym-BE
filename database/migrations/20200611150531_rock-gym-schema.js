
exports.up = function(knex) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments();
    tbl.string("username", 128)
      .unique()
      .notNullable();
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
    tbl.string("problem_name")
      .notNullable()
      .unique()
    tbl.integer("setter")
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE")
    tbl.string("grade")
      .notNullable()
    tbl.integer("angle")
    tbl.str("photo")
    tbl.datetime("create_at", options={useTz: false})
      .notNullable
  })
  .createTable("holds", tbl => {
    tbl.increments();
    tbl.string("type")
      .notNullable();
    tbl.string("photo")
      .notNullable();
  })
  .createTable("holds_problems_map", tbl => {
    tbl.integer("problem_id")
      .notNullable()
      .references("id")
      .inTable("problems")
      .onUpdate("CASCADE")
      .onDelete("CASCADE")
    tbl.integer("hold_id")
      .notNullable()
      .references("id")
      .inTable("holds")
      .onUpdate("CASCADE")
      .onDelete("CASCADE")
    tbl.string("hold_location")
      .notNullable()
  })
  .createTable("favorited_problems", tbl => {
    tbl.integer("user")
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE")
    tbl.integer("problem_id")
      .notNullable()
      .references("id")
      .inTable("problems")
      .onUpdate("CASCADE")
      .onDelete("CASCADE")
  })
};

exports.down = function(knex) {
  
};
