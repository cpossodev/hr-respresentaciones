"use client";

import { useState } from "react";
import HomePortadaCompt from "./homePortadaCompt";
import boxPortComptStyles from "../../../styles/homeStyles/boxPortadaCompt.module.css";

// Import Components
import RedesBoxCompt from '../../redesBoxCompt/redesBoxCompt'



export default function BoxPortadaCompt() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className={boxPortComptStyles.containerAllSlide}>
   
            <RedesBoxCompt />


         {/* Slides apilados */}
        <div className={boxPortComptStyles.slidesWrapper}>

            {/* Botones */}
            <div className={boxPortComptStyles.boxBTNSlides}>
                <button onClick={() => setCurrentIndex(0)} className={`${boxPortComptStyles.bntSlide} ${boxPortComptStyles.bntSlide1}  ${currentIndex === 0 ? boxPortComptStyles.bntSlideActive : ""}`}>1</button>
                <button onClick={() => setCurrentIndex(1)} className={`${boxPortComptStyles.bntSlide} ${boxPortComptStyles.bntSlide2}  ${currentIndex === 1 ? boxPortComptStyles.bntSlideActive : ""}`}>2</button>
                <button onClick={() => setCurrentIndex(2)} className={`${boxPortComptStyles.bntSlide} ${boxPortComptStyles.bntSlide3}  ${currentIndex === 2 ? boxPortComptStyles.bntSlideActive : ""}`}>3</button>
            </div>


            <div className={`${boxPortComptStyles.slide} ${currentIndex === 0 ? boxPortComptStyles.active : ""}`} style={{ zIndex: 3 }}>
                <HomePortadaCompt
                    styleDefault="A"
                    bkImagen="/homePortadas/PortadaA.jpg"
                    titlePortada="SOMOS IMPORTADORES y DISTRIBUIDORES DIRECTOS"
                    textPortada="40 años trayectoria nos posicionan como la empresa número uno en la 
                    importación de soluciones científicas con el mejor respaldo post venta del país."
                    btnText= "Conoce Quienes Somos"
                    linkToPage="/quienes-somos"
                />
            </div>

            <div className={`${boxPortComptStyles.slide} ${currentIndex === 1 ? boxPortComptStyles.active : ""}`} style={{ zIndex: 2 }}>
                <HomePortadaCompt
                    styleDefault="B"
                    bkImagen="/homePortadas/PortadaB.jpg"
                    titlePortada="SOLUCIONES DE NIVEL PROFESIONAL"
                    textPortada="Contamos con una amplica gama de soluciones para laboratorios, 
                    sector industrial, hospitalario, farmacéutico y educativo"
                    btnText= "Visita Nuestra Tienda"
                    linkToPage="/tienda-online"
                />
            </div>

            <div className={`${boxPortComptStyles.slide} ${currentIndex === 2 ? boxPortComptStyles.active : ""}`} style={{ zIndex: 1 }}>
                <HomePortadaCompt
                    styleDefault="C"
                    bkImagen="/homePortadas/PortadaC.jpg"
                    titlePortada="REPRESENTAMOS A LAS MARCAS MÁS RECONOCIDAS A NIVEL MUNDIAL"
                    textPortada="Macherey-nagel, Boeco, Jp Selecta, 3B Scientific, Elitech, Isolab, Alla france y mucho más."
                    btnText= "Conoce Nuestra Calidad"
                    linkToPage="/nuestra-calidad"
                />
            </div>

         </div>

    </div>
  );
}
