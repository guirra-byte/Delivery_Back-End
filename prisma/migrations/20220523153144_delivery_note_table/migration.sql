-- CreateTable
CREATE TABLE `NotaFiscal` (
    `id` VARCHAR(191) NOT NULL,
    `client_id` VARCHAR(191) NOT NULL,
    `item_id` VARCHAR(191) NOT NULL,
    `upload` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `NotaFiscal` ADD CONSTRAINT `NotaFiscal_client_id_fkey` FOREIGN KEY (`client_id`) REFERENCES `clients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `NotaFiscal` ADD CONSTRAINT `NotaFiscal_item_id_fkey` FOREIGN KEY (`item_id`) REFERENCES `deliveries`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
