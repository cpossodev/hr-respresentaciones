// prisma/seed.ts
import { PrismaClient } from "@prisma/client";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

const prisma = new PrismaClient();

async function main() {
  // Conexión a SQLite local
  const db = await open({ filename: "prisma/dev.db", driver: sqlite3.Database });

  // 1. Migrar Marcas
  const marcas = await db.all("SELECT * FROM Marca");
  for (const m of marcas) {
    await prisma.marca.create({ data: { nombre: m.nombre } });
  }

  // 2. Migrar Industrias
  const industrias = await db.all("SELECT * FROM Industria");
  for (const i of industrias) {
    await prisma.industria.create({ data: { nombre: i.nombre } });
  }

  // 3. Migrar Tipos de Producto
  const tipos = await db.all("SELECT * FROM TipoProducto");
  for (const t of tipos) {
    await prisma.tipoProducto.create({ data: { nombre: t.nombre } });
  }

  // 4. Migrar Subcategorías
  const subcategorias = await db.all("SELECT * FROM Subcategoria");
  for (const s of subcategorias) {
    await prisma.subcategoria.create({ data: { nombre: s.nombre } });
  }

  // 5. Migrar Productos
  const productos = await db.all("SELECT * FROM Producto");
  for (const p of productos) {
    await prisma.producto.create({
      data: {
        codigo: p.codigo,
        nombreProd: p.nombreProd,
        modeloProd: p.modeloProd,
        imgURL: p.imgURL ?? "/imgDefaultProducts/photoProductDefault.png",
        presentacion: p.presentacion,
        garantia: p.garantia,
        incluye: p.incluye,
        noIncluye: p.noIncluye,
        descripcion: p.descripcion,
        certificaciones: p.certificaciones,
        detalleUsoAplicacion: p.detalleUsoAplicacion,
        medidas: p.medidas,
        capacidad: p.capacidad,
        material: p.material,
        voltaje: p.voltaje,
        accesorios: p.accesorios,
        anoFabricacion: p.anoFabricacion,
        subcategoriaId: p.subcategoriaId,
        tipoId: p.tipoId,
        marcaId: p.marcaId,
        portada: p.portada === 1 ? true : false,
      },
    });
  }

  // 6. Migrar Galería de Imágenes
  const imagenes = await db.all("SELECT * FROM GaleriaImagen");
  for (const g of imagenes) {
    await prisma.galeriaImagen.create({
      data: { urlImagen: g.urlImagen, productoId: g.productoId },
    });
  }

  // 7. Migrar Logos de Marca
  const logos = await db.all("SELECT * FROM LogoMarca");
  for (const l of logos) {
    await prisma.logoMarca.create({
      data: { urlLogo: l.urlLogo, marcaId: l.marcaId },
    });
  }

  // 8. Migrar tabla intermedia ProductoIndustria
  const prodInd = await db.all("SELECT * FROM _ProductoIndustria");
  for (const pi of prodInd) {
    await prisma.industria.update({
      where: { id: pi.B }, // columna B = industriaId
      data: { productos: { connect: { id: pi.A } } }, // columna A = productoId
    });
  }
}

main()
  .catch((e) => console.error("❌ Error en seed:", e))
  .finally(async () => {
    await prisma.$disconnect();
    console.log("✅ Migración completada");
  });
