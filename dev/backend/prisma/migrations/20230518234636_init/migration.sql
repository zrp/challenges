-- CreateTable
CREATE TABLE `Hero` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `class` ENUM('S', 'A', 'B', 'C') NOT NULL DEFAULT 'C',
    `lati` DOUBLE NOT NULL,
    `longi` DOUBLE NOT NULL,
    `battle_end_timestamp` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
