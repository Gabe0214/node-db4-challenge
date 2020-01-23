
exports.up = function(knex) {
  return knex.schema.createTable('recipe', tbl => {
      tbl.increments()
      tbl.string('name').notNullable()
      tbl.text('directions').notNullable
  })
  .createTable('ingridients', tbl => {
      tbl.increments()
      tbl.string('ingridient_name').notNullable
      tbl.string('type')
  })
  .createTable('recipe_ingridients', tbl => {
      tbl.increments();
      tbl.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipe')
      tbl.integer('ingridients_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingridients')
      tbl.string('quantity').notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExist('recipe_ingridients')
   .dropTableIfExist('ingridients')
   .dropTableIfExist('recipe')
};
