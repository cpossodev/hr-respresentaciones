-- CreateTable
CREATE TABLE "Subcategoria" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL
);

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
    "presentacion" TEXT,
    "garantia" TEXT,
    "incluye" TEXT,
    "noIncluye" TEXT,
    "descripcion" TEXT,
    "certificaciones" TEXT,
    "detalleUsoAplicacion" TEXT,
    "medidas" TEXT,
    "capacidad" TEXT,
    "material" TEXT,
    "voltaje" TEXT,
    "accesorios" TEXT,
    "anoFabricacion" TEXT,
    "subcategoriaId" INTEGER,
    "tipoId" INTEGER NOT NULL,
    "marcaId" INTEGER NOT NULL,
    CONSTRAINT "Producto_subcategoriaId_fkey" FOREIGN KEY ("subcategoriaId") REFERENCES "Subcategoria" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Producto_tipoId_fkey" FOREIGN KEY ("tipoId") REFERENCES "TipoProducto" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Producto_marcaId_fkey" FOREIGN KEY ("marcaId") REFERENCES "Marca" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Producto" ("accesorios", "anoFabricacion", "capacidad", "certificaciones", "codigo", "createdAt", "descripcion", "detalleUsoAplicacion", "garantia", "id", "imgURL", "incluye", "marcaId", "material", "medidas", "modeloProd", "noIncluye", "nombreProd", "presentacion", "tipoId", "voltaje") SELECT "accesorios", "anoFabricacion", "capacidad", "certificaciones", "codigo", "createdAt", "descripcion", "detalleUsoAplicacion", "garantia", "id", "imgURL", "incluye", "marcaId", "material", "medidas", "modeloProd", "noIncluye", "nombreProd", "presentacion", "tipoId", "voltaje" FROM "Producto";
DROP TABLE "Producto";
ALTER TABLE "new_Producto" RENAME TO "Producto";
CREATE UNIQUE INDEX "Producto_codigo_key" ON "Producto"("codigo");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Subcategoria_nombre_key" ON "Subcategoria"("nombre");
