exports.up = function(knex) {
  return knex.schema.createTable("ingredients", function (table) {
    table.increments("id").primary();
    table.integer("dish_id").references("id").onDelete("CASCADE");
    table.text("name");
    table.text("image");

    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("ingredients");
};