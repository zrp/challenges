
exports.up = function(knex) {
    return knex.schema.createTable('heros', function(table){
      table.increments('id');
      table.string('hero').notNullable();
      table.string('classHero').notNullable();
      table.string('latitude').notNullable();
      table.string('longitude').notNullable();

      table.string('user_id').notNullable();

      table.foreign('user_id').references('id').inTable('users');
  
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
  };
  
exports.down = function(knex) {
      return knex.schema.dropTable('heros');
  };
  