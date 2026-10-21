-- CreateTable
CREATE TABLE "Producto" (
    "id" SERIAL NOT NULL,
    "codigo" TEXT NOT NULL,
    "nombreProd" TEXT NOT NULL,
    "modeloProd" TEXT NOT NULL,
    "imgURL" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
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
    "portada" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Producto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Industria" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Industria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TipoProducto" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "TipoProducto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LogoMarca" (
    "id" SERIAL NOT NULL,
    "urlLogo" TEXT NOT NULL,
    "marcaId" INTEGER NOT NULL,

    CONSTRAINT "LogoMarca_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GaleriaImagen" (
    "id" SERIAL NOT NULL,
    "urlImagen" TEXT NOT NULL,
    "productoId" INTEGER NOT NULL,

    CONSTRAINT "GaleriaImagen_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Marca" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Marca_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subcategoria" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Subcategoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProductoIndustria" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ProductoIndustria_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Producto_codigo_key" ON "Producto"("codigo");

-- CreateIndex
CREATE UNIQUE INDEX "Industria_nombre_key" ON "Industria"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "TipoProducto_nombre_key" ON "TipoProducto"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "LogoMarca_marcaId_key" ON "LogoMarca"("marcaId");

-- CreateIndex
CREATE UNIQUE INDEX "Marca_nombre_key" ON "Marca"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Subcategoria_nombre_key" ON "Subcategoria"("nombre");

-- CreateIndex
CREATE INDEX "_ProductoIndustria_B_index" ON "_ProductoIndustria"("B");

-- AddForeignKey
ALTER TABLE "Producto" ADD CONSTRAINT "Producto_subcategoriaId_fkey" FOREIGN KEY ("subcategoriaId") REFERENCES "Subcategoria"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Producto" ADD CONSTRAINT "Producto_tipoId_fkey" FOREIGN KEY ("tipoId") REFERENCES "TipoProducto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Producto" ADD CONSTRAINT "Producto_marcaId_fkey" FOREIGN KEY ("marcaId") REFERENCES "Marca"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LogoMarca" ADD CONSTRAINT "LogoMarca_marcaId_fkey" FOREIGN KEY ("marcaId") REFERENCES "Marca"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GaleriaImagen" ADD CONSTRAINT "GaleriaImagen_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "Producto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductoIndustria" ADD CONSTRAINT "_ProductoIndustria_A_fkey" FOREIGN KEY ("A") REFERENCES "Industria"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductoIndustria" ADD CONSTRAINT "_ProductoIndustria_B_fkey" FOREIGN KEY ("B") REFERENCES "Producto"("id") ON DELETE CASCADE ON UPDATE CASCADE;
