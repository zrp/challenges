import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { Admin } from '../seed/user.seed';
export class seeduser1594261805772 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await getRepository('users').save(Admin);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
