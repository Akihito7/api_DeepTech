exports.up = knex => knex.schema.createTable("products", table => {
    table.increments("id");
    table.text("name").notNullable();
    table.text("information");
    table.text("price").notNullable();
    table.text("category").notNullable();
    table.text("imagem").notNullable();
    table.text("colors").notNullable();
    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
  });
  
  exports.down = knex => knex.schema.dropTable("products");