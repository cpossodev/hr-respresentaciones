/*
  Warnings:

  - The primary key for the `Producto` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Producto` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `B` on the `_ProductoIndustria` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Producto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "codigo" TEXT NOT NULL,
    "nombreProd" TEXT NOT NULL,
    "modeloProd" TEXT NOT NULL,
    "imgURL" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tipoId" INTEGER NOT NULL,
    "marcaId" INTEGER NOT NULL,
    CONSTRAINT "Producto_tipoId_fkey" FOREIGN KEY ("tipoId") REFERENCES "TipoProducto" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Producto_marcaId_fkey" FOREIGN KEY ("marcaId") REFERENCES "Marca" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Producto" ("codigo", "createdAt", "id", "imgURL", "marcaId", "modeloProd", "nombreProd", "tipoId") SELECT "codigo", "createdAt", "id", "imgURL", "marcaId", "modeloProd", "nombreProd", "tipoId" FROM "Producto";
DROP TABLE "Producto";
ALTER TABLE "new_Producto" RENAME TO "Producto";
CREATE UNIQUE INDEX "Producto_codigo_key" ON "Producto"("codigo");
CREATE TABLE "new__ProductoIndustria" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_ProductoIndustria_A_fkey" FOREIGN KEY ("A") REFERENCES "Industria" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ProductoIndustria_B_fkey" FOREIGN KEY ("B") REFERENCES "Producto" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new__ProductoIndustria" ("A", "B") SELECT "A", "B" FROM "_ProductoIndustria";
DROP TABLE "_ProductoIndustria";
ALTER TABLE "new__ProductoIndustria" RENAME TO "_ProductoIndustria";
CREATE UNIQUE INDEX "_ProductoIndustria_AB_unique" ON "_ProductoIndustria"("A", "B");
CREATE INDEX "_ProductoIndustria_B_index" ON "_ProductoIndustria"("B");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
