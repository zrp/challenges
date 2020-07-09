import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class createHeroesThreats1593800649068
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'threats_heroes',
        columns: [
          {
            name: 'threatId',
            type: 'uuid',
            isNullable: false,
            isPrimary: true,
          },
          {
            name: 'heroId',
            type: 'uuid',
            isNullable: false,
            isPrimary: true,
          },
          {
            name: 'isAlive',
            type: 'boolean',
            default: true,
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

    await queryRunner.createForeignKey(
      'threats_heroes',
      new TableForeignKey({
        name: 'Fk_threatsheroes_threat',
        columnNames: ['threatId'],
        referencedTableName: 'threats',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      'threats_heroes',
      new TableForeignKey({
        name: 'Fk_threatsheroes_hero',
        columnNames: ['heroId'],
        referencedTableName: 'heroes',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('threats_heroes', 'Fk_threatsheroes_hero');
    await queryRunner.dropForeignKey(
      'threats_heroes',
      'Fk_threatsheroes_threat',
    );
    await queryRunner.dropTable('threats_heroes');
  }
}
