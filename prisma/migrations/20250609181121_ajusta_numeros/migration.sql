/*
  Warnings:

  - Added the required column `numeroFuncionarios` to the `Cooperativa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numeroVeiculos` to the `Cooperativa` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cooperativa" DROP COLUMN "numeroFuncionarios",
ADD COLUMN     "numeroFuncionarios" INTEGER NOT NULL,
DROP COLUMN "numeroVeiculos",
ADD COLUMN     "numeroVeiculos" INTEGER NOT NULL;
