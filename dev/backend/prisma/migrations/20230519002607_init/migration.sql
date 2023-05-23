/*
  Warnings:

  - The `battle_end_timestamp` column on the `Hero` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE `Hero` DROP COLUMN `battle_end_timestamp`,
    ADD COLUMN `battle_end_timestamp` DATETIME(3) NULL;
