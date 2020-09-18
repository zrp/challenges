import Knex from 'knex';

export async function up( knex: Knex) {
    return knex.schema.createTable('aloca_hero', table => {
        table.increments('id').primary();

        table.string('hero').notNullable();
        table.string('ameaca').notNullable();
        table.string('status').notNullable();

    });
}

export async function down( knex: Knex) {
    return knex.schema.dropTable('aloca_hero');
}