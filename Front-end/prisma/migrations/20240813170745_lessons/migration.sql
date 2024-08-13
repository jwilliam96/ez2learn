/*
  Warnings:

  - You are about to drop the column `link` on the `Lessons` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[category]` on the table `Categories` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `video` to the `Lessons` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Lessons" DROP COLUMN "link",
ADD COLUMN     "video" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Categories_category_key" ON "Categories"("category");
