exports.up = function(knex) {
  return knex.schema.createTable("dishes", function (table) {
    table.increments("id");
    table.text("name");
    table.text("description");
    table.text("image");
    table.float("price");
    table.text("category");

    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("dishes");
};
