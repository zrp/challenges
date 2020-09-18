import Knex from 'knex';

export async function up( knex: Knex) {
    return knex.schema.createTable('heroes', table => {
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.string('senha').notNullable();
        table.string('rank').notNullable();
        table.boolean('locado').notNullable();
        table.string('bio').notNullable();
    });
}

export async function down( knex: Knex) {
    return knex.schema.dropTable('heroes');
}