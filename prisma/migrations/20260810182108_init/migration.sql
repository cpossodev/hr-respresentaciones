-- CreateTable
CREATE TABLE "Producto" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "codigo" TEXT NOT NULL,
    "nombreProd" TEXT NOT NULL,
    "modeloProd" TEXT NOT NULL,
    "marcaProd" TEXT NOT NULL,
    "imgURL" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Industria" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ProductoIndustria" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_ProductoIndustria_A_fkey" FOREIGN KEY ("A") REFERENCES "Industria" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ProductoIndustria_B_fkey" FOREIGN KEY ("B") REFERENCES "Producto" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Producto_codigo_key" ON "Producto"("codigo");

-- CreateIndex
CREATE UNIQUE INDEX "Industria_nombre_key" ON "Industria"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "_ProductoIndustria_AB_unique" ON "_ProductoIndustria"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductoIndustria_B_index" ON "_ProductoIndustria"("B");
