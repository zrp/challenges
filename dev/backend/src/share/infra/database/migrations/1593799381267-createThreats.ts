import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class createThreats1593799381267 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'threats',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'dangerLevel',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'monsterName',
            type: 'varchar',
          },
          {
            name: 'lat',
            type: 'float8',
          },
          {
            name: 'lng',
            type: 'float8',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('threats');
  }
}
