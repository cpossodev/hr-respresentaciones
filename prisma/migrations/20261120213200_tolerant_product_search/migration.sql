CREATE EXTENSION IF NOT EXISTS pg_trgm;

CREATE OR REPLACE FUNCTION hr_normalize_search_text(input TEXT)
RETURNS TEXT
LANGUAGE SQL
IMMUTABLE
PARALLEL SAFE
AS $$
  SELECT btrim(
    regexp_replace(
      translate(
        lower(coalesce(input, '')),
        'áéíóúüàèìòùâêîôûäëïöÿ',
        'aeiouuaeiouaeiouaeioy'
      ),
      '[[:space:]]+',
      ' ',
      'g'
    )
  );
$$;

CREATE INDEX IF NOT EXISTS "Producto_nombreProd_search_trgm_idx"
  ON "Producto" USING GIN (hr_normalize_search_text("nombreProd") gin_trgm_ops);

CREATE INDEX IF NOT EXISTS "Producto_modeloProd_search_trgm_idx"
  ON "Producto" USING GIN (hr_normalize_search_text("modeloProd") gin_trgm_ops);

CREATE INDEX IF NOT EXISTS "Producto_codigo_search_trgm_idx"
  ON "Producto" USING GIN (hr_normalize_search_text("codigo") gin_trgm_ops);

CREATE INDEX IF NOT EXISTS "Marca_nombre_search_trgm_idx"
  ON "Marca" USING GIN (hr_normalize_search_text("nombre") gin_trgm_ops);

CREATE INDEX IF NOT EXISTS "TipoProducto_nombre_search_trgm_idx"
  ON "TipoProducto" USING GIN (hr_normalize_search_text("nombre") gin_trgm_ops);

CREATE INDEX IF NOT EXISTS "Subcategoria_nombre_search_trgm_idx"
  ON "Subcategoria" USING GIN (hr_normalize_search_text("nombre") gin_trgm_ops);

CREATE INDEX IF NOT EXISTS "Industria_nombre_search_trgm_idx"
  ON "Industria" USING GIN (hr_normalize_search_text("nombre") gin_trgm_ops);
