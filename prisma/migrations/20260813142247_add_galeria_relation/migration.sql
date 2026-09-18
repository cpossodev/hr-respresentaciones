-- AlterTable
ALTER TABLE "Producto" ADD COLUMN "accesorios" TEXT;
ALTER TABLE "Producto" ADD COLUMN "anoFabricacion" TEXT;
ALTER TABLE "Producto" ADD COLUMN "certificaciones" TEXT;
ALTER TABLE "Producto" ADD COLUMN "descripcion" TEXT;
ALTER TABLE "Producto" ADD COLUMN "detalleUsoAplicacion" TEXT;
ALTER TABLE "Producto" ADD COLUMN "garantia" TEXT;
ALTER TABLE "Producto" ADD COLUMN "incluye" TEXT;
ALTER TABLE "Producto" ADD COLUMN "material" TEXT;
ALTER TABLE "Producto" ADD COLUMN "medidas" TEXT;
ALTER TABLE "Producto" ADD COLUMN "noIncluye" TEXT;
ALTER TABLE "Producto" ADD COLUMN "presentacion" TEXT;
ALTER TABLE "Producto" ADD COLUMN "voltaje" TEXT;

-- CreateTable
CREATE TABLE "LogoMarca" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "urlLogo" TEXT NOT NULL,
    "marcaId" INTEGER NOT NULL,
    CONSTRAINT "LogoMarca_marcaId_fkey" FOREIGN KEY ("marcaId") REFERENCES "Marca" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "GaleriaImagen" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "urlImagen" TEXT NOT NULL,
    "productoId" INTEGER NOT NULL,
    CONSTRAINT "GaleriaImagen_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "Producto" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "LogoMarca_marcaId_key" ON "LogoMarca"("marcaId");
