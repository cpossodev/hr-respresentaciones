/*
  Warnings:

  - Added the required column `tipoId` to the `Producto` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "TipoProducto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Producto" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "codigo" TEXT NOT NULL,
    "nombreProd" TEXT NOT NULL,
    "modeloProd" TEXT NOT NULL,
    "marcaProd" TEXT NOT NULL,
    "imgURL" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tipoId" INTEGER NOT NULL,
    CONSTRAINT "Producto_tipoId_fkey" FOREIGN KEY ("tipoId") REFERENCES "TipoProducto" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Producto" ("codigo", "createdAt", "id", "imgURL", "marcaProd", "modeloProd", "nombreProd") SELECT "codigo", "createdAt", "id", "imgURL", "marcaProd", "modeloProd", "nombreProd" FROM "Producto";
DROP TABLE "Producto";
ALTER TABLE "new_Producto" RENAME TO "Producto";
CREATE UNIQUE INDEX "Producto_codigo_key" ON "Producto"("codigo");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "TipoProducto_nombre_key" ON "TipoProducto"("nombre");
