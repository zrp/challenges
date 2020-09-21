
exports.up = function(knex) {
    return knex.schema.createTable('users', function(table){
      table.increments('id');
      table.string('username').notNullable();
      table.string('password').notNullable();
      table.string('city').notNullable();
      table.string('country').notNullable();
  
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
  };
  
exports.down = function(knex) {
      return knex.schema.dropTable('users');
  };
  