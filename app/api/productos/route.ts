// app/api/productos/route.ts
import { NextResponse } from "next/server";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const normalizeContains = (field: Prisma.Sql, value: string) => Prisma.sql`
  strpos(hr_normalize_search_text(${field}), hr_normalize_search_text(${value})) > 0
`;

const normalizeSearchMatch = (
  field: Prisma.Sql,
  search: string,
  allowTypos: boolean
) => {
  const normalizedField = Prisma.sql`hr_normalize_search_text(${field})`;
  const normalizedSearch = Prisma.sql`hr_normalize_search_text(${search})`;
  const exactMatch = Prisma.sql`strpos(${normalizedField}, ${normalizedSearch}) > 0`;

  return allowTypos
    ? Prisma.sql`(${exactMatch} OR ${normalizedField} %> ${normalizedSearch})`
    : exactMatch;
};

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

    const normalizedSearch = search?.trim().replace(/\s+/g, " ") ?? "";

    if (normalizedSearch) {
      const allowTypos = normalizedSearch
        .split(/\s+/)
        .some((word) => Array.from(word).length >= 4);
      const fields = [
        Prisma.sql`p."nombreProd"`,
        Prisma.sql`p."modeloProd"`,
        Prisma.sql`p."codigo"`,
        Prisma.sql`m."nombre"`,
        Prisma.sql`t."nombre"`,
        Prisma.sql`s."nombre"`,
      ];
      const searchConditions = fields.map((field) =>
        normalizeSearchMatch(field, normalizedSearch, allowTypos)
      );
      searchConditions.push(Prisma.sql`
        EXISTS (
          SELECT 1
          FROM "_ProductoIndustria" AS search_pi
          INNER JOIN "Industria" AS search_i ON search_i."id" = search_pi."A"
          WHERE search_pi."B" = p."id"
            AND ${normalizeSearchMatch(
              Prisma.sql`search_i."nombre"`,
              normalizedSearch,
              allowTypos
            )}
        )
      `);

      const whereConditions = [
        Prisma.sql`(${Prisma.join(searchConditions, " OR ")})`,
      ];

      if (portada === "true") {
        whereConditions.push(Prisma.sql`p."portada" = TRUE`);
      }

      if (marca) {
        whereConditions.push(
          normalizeContains(Prisma.sql`m."nombre"`, marca)
        );
      }

      if (tipo) {
        whereConditions.push(
          normalizeContains(Prisma.sql`s."nombre"`, tipo)
        );
      }

      if (industria) {
        whereConditions.push(Prisma.sql`
          EXISTS (
            SELECT 1
            FROM "_ProductoIndustria" AS filter_pi
            INNER JOIN "Industria" AS filter_i ON filter_i."id" = filter_pi."A"
            WHERE filter_pi."B" = p."id"
              AND ${normalizeContains(Prisma.sql`filter_i."nombre"`, industria)}
          )
        `);
      }

      const fromAndWhere = Prisma.sql`
        FROM "Producto" AS p
        LEFT JOIN "Marca" AS m ON m."id" = p."marcaId"
        LEFT JOIN "TipoProducto" AS t ON t."id" = p."tipoId"
        LEFT JOIN "Subcategoria" AS s ON s."id" = p."subcategoriaId"
        LEFT JOIN "_ProductoIndustria" AS pi ON pi."B" = p."id"
        LEFT JOIN "Industria" AS i ON i."id" = pi."A"
        WHERE ${Prisma.join(whereConditions, " AND ")}
      `;
      const normalizedTerm = Prisma.sql`hr_normalize_search_text(${normalizedSearch})`;
      const fieldScores = fields.map(
        (field) =>
          Prisma.sql`COALESCE(MAX(word_similarity(${normalizedTerm}, hr_normalize_search_text(${field}))), 0)`
      );
      const score = Prisma.sql`
        GREATEST(
          ${Prisma.join(fieldScores, ", ")},
          COALESCE(
            MAX(word_similarity(${normalizedTerm}, hr_normalize_search_text(i."nombre"))),
            0
          )
        )
      `;

      const result = await prisma.$transaction(async (tx) => {
        if (allowTypos) {
          await tx.$executeRaw`SET LOCAL pg_trgm.word_similarity_threshold = 0.35`;
        }

        const [count] = await tx.$queryRaw<{ total: bigint }[]>(Prisma.sql`
          SELECT COUNT(DISTINCT p."id")::bigint AS total
          ${fromAndWhere}
        `);
        const matchedProducts = await tx.$queryRaw<
          { id: number; score: number }[]
        >(Prisma.sql`
          SELECT p."id" AS id, ${score} AS score
          ${fromAndWhere}
          GROUP BY p."id"
          ORDER BY score DESC, p."id" ASC
          LIMIT ${limitNum}
          OFFSET ${skip}
        `);

        const products = matchedProducts.length
          ? await tx.producto.findMany({
              where: { id: { in: matchedProducts.map(({ id }) => id) } },
              include: {
                marca: true,
                tipo: true,
                industrias: true,
                subcategoria: true,
                galeria: true,
              },
            })
          : [];
        const productsById = new Map(products.map((product) => [product.id, product]));

        return {
          productos: matchedProducts.flatMap(({ id }) => {
            const product = productsById.get(id);
            return product ? [product] : [];
          }),
          total: Number(count.total),
        };
      });

      return NextResponse.json({
        ...result,
        totalPages: Math.ceil(result.total / limitNum),
        currentPage: pageNum,
      });
    }

    // 👉 Construimos el objeto where dinámico con AND
    const where: any = { AND: [] };

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
