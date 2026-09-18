
"use client";
import { useState } from "react";

//Import CSS
import btnFiltroModelStyles from './btnFiltroModelFast.module.css'


interface BtnFiltroUseIndustriaComptProps {
  nameFiltro: string;
  onClickSearch: (term: string) => void;
}


export default function BtnFiltroModelFast({ nameFiltro, onClickSearch }: BtnFiltroUseIndustriaComptProps) {

        const [activo, setActivo] = useState(false);
     
          const handleClick = () => {
            setActivo(!activo);
            onClickSearch(nameFiltro); // 👉 enviamos el texto al padre
          };

    return(
        
       <button
          className={`${activo ? btnFiltroModelStyles.btnActivoUseInds : btnFiltroModelStyles.boxContentBtnUseInds}`}
          onClick={handleClick}
        >
          <p className={btnFiltroModelStyles.nameBtnFiltro}>{nameFiltro}</p>

        </button>

    );

}
