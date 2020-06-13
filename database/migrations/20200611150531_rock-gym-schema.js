
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
    tbl.integer("attempts")
      .notNullable()
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
    tbl.string("photo")
    tbl.datetime("created_at", options={useTz: false})
      .notNullable
  })
  .createTable("holds", tbl => {
    tbl.increments();
    tbl.string("name")
      .notNullable()
    tbl.string("size")
    tbl.string("type")
    tbl.string("photo")
      .notNullable();
  })
  .createTable("holds_problems_map", tbl => {
    tbl.increments()
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
    tbl.string("wall_location")
      .notNullable()
  })
  .createTable("favorited_problems", tbl => {
    tbl.increments()
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
  return knex.schema
  .dropTableIfExists("favorited_problems")
  .dropTableIfExists("holds_problems_map")
  .dropTableIfExists("holds")
  .dropTableIfExists("problems")
  .dropTableIfExists("sends")
  .dropTableIfExists("appointments")
  .dropTableIfExists("users")
};
