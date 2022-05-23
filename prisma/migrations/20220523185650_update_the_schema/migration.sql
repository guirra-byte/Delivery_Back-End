/*
  Warnings:

  - You are about to drop the `notafiscal` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `notafiscal` DROP FOREIGN KEY `NotaFiscal_client_id_fkey`;

-- DropForeignKey
ALTER TABLE `notafiscal` DROP FOREIGN KEY `NotaFiscal_item_id_fkey`;

-- DropTable
DROP TABLE `notafiscal`;

-- CreateTable
CREATE TABLE `notes` (
    `id` VARCHAR(191) NOT NULL,
    `client_id` VARCHAR(191) NOT NULL,
    `item_id` VARCHAR(191) NOT NULL,
    `upload` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `notes` ADD CONSTRAINT `notes_client_id_fkey` FOREIGN KEY (`client_id`) REFERENCES `clients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `notes` ADD CONSTRAINT `notes_item_id_fkey` FOREIGN KEY (`item_id`) REFERENCES `deliveries`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
