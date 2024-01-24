exports.up = function(knex) {
  return knex.schema.createTable("favorites", function (table) {
    table.increments("id").primary();
    table.integer("use_id").references("id").inTable("users").onDelete("CASCADE");
    table.integer("dish_id").references("id").inTable("dishes").onDelete("CASCADE");

    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("favorites");
}