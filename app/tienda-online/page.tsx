"use client";
import { useState, useEffect, useRef } from "react";
import tiendaOnlineStyles from "./pageTOnline.module.css";
import type { Producto } from "./types/producto";

import SearchBar from "./componentsTiendaOnline/searchBarCompt/searchBar";
import FiltroMarcasCompt from "./componentsTiendaOnline/filtroMarcasCompt/filtroMarcasCompt";
import SelectFiltroCompt from "./componentsTiendaOnline/selectFiltros/selectFiltroCompt";
import SectBtnFastSearch from "./componentsTiendaOnline/botonUseIndustria/sectBtnFastSearch";
import SectGridProducts from "./componentsTiendaOnline/gridProductsCompt/sectGridProducts";

type ActiveFilter =
  | { kind: "search"; value: string }
  | { kind: "marca"; value: string }
  | { kind: "tipo"; value: string }
  | { kind: "industria"; value: string }
  | null;

export default function TiendaOnline() {

  // Estados principales
  const [productos, setProductos] = useState<Producto[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [activeFilter, setActiveFilter] = useState<ActiveFilter>(null);

  const limit = 12; // 👉 número de productos por página

  const gridProductsRef = useRef<HTMLDivElement>(null);
  const shouldScrollToGrid = useRef(false);

  const fetchProductos = async (page: number, filter: ActiveFilter = null) => {
    try {
      const params = new URLSearchParams({
        page: String(page),
        limit: String(limit),
      });

      if (filter) {
        params.set(filter.kind, filter.value);
      } else {
        params.set("portada", "true");
      }

      const res = await fetch(`/api/productos?${params.toString()}`);
      if (!res.ok) throw new Error("Error al cargar productos");

      const data = await res.json();
      setProductos(data.productos);
      setTotalPages(data.totalPages);
      setCurrentPage(data.currentPage);
    } catch (err) {
      console.error("❌ Error en fetchProductos:", err);
      setProductos([]);
    }
  };

  const applyFilter = async (filter: ActiveFilter, inputValue = "") => {
    shouldScrollToGrid.current = true;
    setActiveFilter(filter);
    setSearchInput(inputValue);
    setCurrentPage(1);
    await fetchProductos(1, filter);
  };

  // const handleSearch = async (term: string) => {
  //   const normalizedTerm = term.trim();
  //   if (!normalizedTerm) return;

  //   await applyFilter({ kind: "search", value: normalizedTerm }, normalizedTerm);
  // };

const handleSearch = async (term: string, showSearchText = true) => {
  const normalizedTerm = term.trim();
  if (!normalizedTerm) return;

  await applyFilter(
    { kind: "search", value: normalizedTerm },
    showSearchText ? normalizedTerm : ""
  );
};



  // 📌 Carga inicial (portada)
  useEffect(() => {
    fetchProductos(1, null);
  }, []);

  // Efecto para scroll después de una búsqueda o cambio de filtro
  useEffect(() => {
    if (!shouldScrollToGrid.current) return;

    requestAnimationFrame(() => {
      gridProductsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      shouldScrollToGrid.current = false;
    });
  }, [productos]);

  // 📌 Paginación
  const handlePageChange = async (page: number) => {
    shouldScrollToGrid.current = true;
    setCurrentPage(page);
    await fetchProductos(page, activeFilter);
  };

  // 📌 Filtros
  const handleMarcaSelect = async (marca: string) => {
    const value = marca.trim();
    await applyFilter(value ? { kind: "marca", value } : null);
  };

  const handleTipoSelect = async (tipo: string) => {
    const value = tipo.trim();
    await applyFilter(value ? { kind: "tipo", value } : null);
  };

  const handleIndustriaSelect = async (industria: string) => {
    const value = industria.trim();
    await applyFilter(value ? { kind: "industria", value } : null);
  };

  return (
    <div className={tiendaOnlineStyles.contentAllTiendaOnline}>
      <SearchBar
        value={searchInput}
        onChange={setSearchInput}
        onSearch={handleSearch}
      />

      {/* BOTONES DE FILTROS DE MARCAS */}
      <FiltroMarcasCompt onMarcaSelect={handleMarcaSelect} />

      {/* SELECTS DE FILTROS */}
      <SelectFiltroCompt
        selectedMarca={activeFilter?.kind === "marca" ? activeFilter.value : ""}
        selectedTipo={activeFilter?.kind === "tipo" ? activeFilter.value : ""}
        selectedIndustria={activeFilter?.kind === "industria" ? activeFilter.value : ""}
        onMarcaSelect={handleMarcaSelect}
        onTipoSelect={handleTipoSelect}
        onIndustriaSelect={handleIndustriaSelect}
      />

      {/* <SectBtnFastSearch 
        onButtonSearch={handleSearch}
        
      /> */}

      <SectBtnFastSearch
  onButtonSearch={(term) => handleSearch(term, false)}
/>

      <div className={tiendaOnlineStyles.boxLineDivTOnline}>
        <div className={tiendaOnlineStyles.lineDivTOnline}></div>
      </div>

      <div className={tiendaOnlineStyles.boxContentTextOrden}>
        
        {/* <div className={tiendaOnlineStyles.boxTextResultados}>
          <SearchResult
            textMarcaRB="Macharay Nagel"
            TipoProdRB="Equipos"
            TipoIndustRB="Médico"
          />
        </div> */}

        {/* <div className={tiendaOnlineStyles.boxSelectOrderCompt}>
          <SelectOrdenarCompt />
        </div> */}

      </div>

      <div
        ref={gridProductsRef}
        style={{ scrollMarginTop: "80px" }}
      >
        <SectGridProducts
          productos={productos}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>

    </div>
  );
}
