exports.up = function(knex) {
  return knex.schema.createTable("orders", function (table) {
    table.increments("id").primary();
    table.integer("user_id").references("id").inTable("users");
    table.varchar("dishes_order").notNullable();
    table.text("status").notNullable();

    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("orders");
};