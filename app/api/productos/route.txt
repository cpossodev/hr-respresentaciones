// app/api/productos/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    // 👉 Capturamos todos los parámetros posibles
    const { search, portada, marca, tipo, industria, page, limit } = Object.fromEntries(
      new URL(request.url).searchParams
    );

    // 👉 Definimos paginación
    const pageNum = parseInt(page ?? "1", 10);
    const limitNum = parseInt(limit ?? "16", 10);
    const skip = (pageNum - 1) * limitNum;

    // 👉 Construimos el objeto where dinámico con AND
    const where: any = { AND: [] };

    // 🔎 Si hay búsqueda libre desde SearchBar
    if (search && search.trim() !== "") {
      where.AND.push({
        OR: [
          { nombreProd: { contains: search } },
          { modeloProd: { contains: search } },
          { codigo: { contains: search } },
          { marca: { nombre: { contains: search } } },
          { tipo: { nombre: { contains: search } } },
          { industrias: { some: { nombre: { contains: search } } } },
          { subcategoria: { nombre: { contains: search } } },
        ],
      });
    }

    // ⭐ Si es portada/destacados
    if (portada === "true") {
      where.AND.push({ portada: true });
    }

    // 🏷️ Si se seleccionó una marca
    if (marca) {
      where.AND.push({ marca: { nombre: { contains: marca } } });
    }

    // 🏷️ Si se seleccionó un tipo de producto (subcategoría)
    if (tipo) {
      where.AND.push({ subcategoria: { nombre: { contains: tipo } } });
    }

    // 🏷️ Si se seleccionó una industria
    if (industria) {
      where.AND.push({ industrias: { some: { nombre: { contains: industria } } } });
    }

    // 👉 Total de registros para calcular páginas
    const total = await prisma.producto.count({ where });

    // 👉 Productos paginados
    const productos = await prisma.producto.findMany({
      where,
      skip,
      take: limitNum,
      include: {
        marca: true,
        tipo: true,
        industrias: true,
        subcategoria: true,
        galeria: true,
      },
    });

    // 👉 Respuesta JSON con todo lo necesario
    return NextResponse.json({
      productos,
      total,
      totalPages: Math.ceil(total / limitNum),
      currentPage: pageNum,
    });
  } catch (error: unknown) {
    console.error("❌ Error al consultar productos:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Error al obtener productos" },
      { status: 500 }
    );
  }
}
