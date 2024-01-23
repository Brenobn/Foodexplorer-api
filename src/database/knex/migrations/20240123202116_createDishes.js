exports.up = kenx => knex.schema.createTable("dishes", table => {
  table.increments("id");
  table.text("name");
  table.text("description");
  table.text("image");
  table.float("price");
  table.text("category");

  table.timestamp("created_at").default(knex.fn.now());
  table.timestamp("updated_at").default(knex.fn.now());
});

exports.down = kenx => knex.schema.dropTable("dishes");
