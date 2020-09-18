import Knex from 'knex';

export async function up( knex: Knex) {
    return knex.schema.createTable('ameaca', table => {
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.string('rank').notNullable();
        table.string('status').notNullable();
        table.string('longitude').notNullable();
        table.string('latitude').notNullable();
    });
}

export async function down( knex: Knex) {
    return knex.schema.dropTable('ameaca');
}