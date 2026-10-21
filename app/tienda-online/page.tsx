"use client";
import { useState, useEffect, useRef } from "react";
import tiendaOnlineStyles from "./pageTOnline.module.css";
import type { Producto } from "./types/producto";

import SearchBar from "./componentsTiendaOnline/searchBarCompt/searchBar";
import FiltroMarcasCompt from "./componentsTiendaOnline/filtroMarcasCompt/filtroMarcasCompt";
import SelectFiltroCompt from "./componentsTiendaOnline/selectFiltros/selectFiltroCompt";
import SectBtnFastSearch from "./componentsTiendaOnline/botonUseIndustria/sectBtnFastSearch";
import SearchResult from "./componentsTiendaOnline/searchResult/searchResult";
import SelectOrdenarCompt from "./componentsTiendaOnline/selectOrdenarCompt/selectOrdenarCompt";
import SectGridProducts from "./componentsTiendaOnline/gridProductsCompt/sectGridProducts";

export default function TiendaOnline() {

  // Estados principales
  const [productos, setProductos] = useState<Producto[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMarca, setSelectedMarca] = useState<string | null>(null);
  const [selectedTipo, setSelectedTipo] = useState<string | null>(null);
  const [selectedIndustria, setSelectedIndustria] = useState<string | null>(null);

  const limit = 16; // 👉 número de productos por página

  const gridProductsRef = useRef<HTMLDivElement>(null);
  const shouldScrollToGrid = useRef(false);


  // 👉 Función genérica para traer productos con filtros
  const fetchProductos = async (
    page: number,
    marca?: string | null,
    tipo?: string | null,
    industria?: string | null,
    search?: string | null
  ) => {
    try {
      let url = `/api/productos?page=${page}&limit=${limit}`;

      if (search && search.trim() !== "") {
        url += `&search=${encodeURIComponent(search)}`;
      }
      if (marca) {
        url += `&marca=${encodeURIComponent(marca)}`;
      }
      if (tipo) {
        url += `&tipo=${encodeURIComponent(tipo)}`;
      }
      if (industria) {
        url += `&industria=${encodeURIComponent(industria)}`;
      }
      if (!search && !marca && !tipo && !industria) {
        url += `&portada=true`;
      }

      const res = await fetch(url);
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

  // 🔎 Búsqueda desde SearchBar
  const buscarProductos = async (term: string, page = 1) => {
    shouldScrollToGrid.current = true;
    setSearchTerm(term);
    setCurrentPage(1);

    await fetchProductos (
      page, 
      selectedMarca, 
      selectedTipo, 
      selectedIndustria, 
      term
    );
  };

  // 📌 Carga inicial (portada)
  useEffect(() => {
    fetchProductos(1);
  }, []);

// Efect para Scroll Post búsqueda
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
    await fetchProductos(page, selectedMarca, selectedTipo, selectedIndustria, searchTerm);
  };

  // 📌 Filtros
  const handleMarcaSelect = async (marca: string) => {
    shouldScrollToGrid.current = true;
    setSelectedMarca(marca || null);
    setCurrentPage(1);
    await fetchProductos(1, marca, selectedTipo, selectedIndustria, searchTerm);
  };

  const handleTipoSelect = async (tipo: string) => {
    shouldScrollToGrid.current = true;
    setSelectedTipo(tipo || null);
    setCurrentPage(1);
    await fetchProductos(1, selectedMarca, tipo, selectedIndustria, searchTerm);
  };

  const handleIndustriaSelect = async (industria: string) => {
    shouldScrollToGrid.current = true;
    setSelectedIndustria(industria || null);
    setCurrentPage(1);
    await fetchProductos(1, selectedMarca, selectedTipo, industria, searchTerm);
  };

  const handleButtonSearch = async (term: string) => {
    shouldScrollToGrid.current = true;
    setSearchTerm(term);
    setCurrentPage(1);
    await fetchProductos (
      1, 
      selectedMarca, 
      selectedTipo, 
      selectedIndustria, 
      term
    );
  };

  return (
    <div className={tiendaOnlineStyles.contentAllTiendaOnline}>
      <SearchBar onSearch={(term) => buscarProductos(term)} />

      {/* BOTONES DE FILTROS DE MARCAS */}
      <FiltroMarcasCompt onMarcaSelect={handleMarcaSelect} />

      {/* SELECTS DE FILTROS */}
      <SelectFiltroCompt
        onMarcaSelect={handleMarcaSelect}
        onTipoSelect={handleTipoSelect}
        onIndustriaSelect={handleIndustriaSelect}
      />

      <SectBtnFastSearch 
        onButtonSearch={handleButtonSearch}
        
      />

      <div className={tiendaOnlineStyles.boxLineDivTOnline}>
        <div className={tiendaOnlineStyles.lineDivTOnline}></div>
      </div>

      <div className={tiendaOnlineStyles.boxContentTextOrden}>
        <div className={tiendaOnlineStyles.boxTextResultados}>
          <SearchResult
            textMarcaRB="Macharay Nagel"
            TipoProdRB="Equipos"
            TipoIndustRB="Médico"
          />
        </div>
        <div className={tiendaOnlineStyles.boxSelectOrderCompt}>
          <SelectOrdenarCompt />
        </div>
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
