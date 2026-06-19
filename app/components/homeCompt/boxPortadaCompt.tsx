"use client";

import { useState } from "react";
import HomePortadaCompt from "../homeCompt/homePortadaCompt";
import boxPortComptStyles from "../../styles/boxPortadaCompt.module.css";

// Import Components
import RedesBoxCompt from '../redesBoxCompt/redesBoxCompt'



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
                    textPortada="Somos Importadores directos y distribuidores de Equipos Científicos, Reactivos e Insumos para Laboratorios, Industrias y Enseñanza."
                              btnText= "Conoce Quienes Somos"
                    linkToPage="/quienes-somos"
                />
            </div>

            <div className={`${boxPortComptStyles.slide} ${currentIndex === 1 ? boxPortComptStyles.active : ""}`} style={{ zIndex: 2 }}>
                <HomePortadaCompt
                    styleDefault="B"
                    bkImagen="/homePortadas/PortadaB.jpg"
                    textPortada="Ofrecemos una amplia línea de equipos y  soluciones de nivel profesional para Laboratorios Clínicos, Bioseguridad Hospitalaria, Industria 
                                Alimenticia, Farmacéutica, Agroindustrial, Instituciones Educativas y Universidades."
                    btnText= "Visita Nuestra Tienda"
                    linkToPage="/tienda-online"
                />
            </div>

            <div className={`${boxPortComptStyles.slide} ${currentIndex === 2 ? boxPortComptStyles.active : ""}`} style={{ zIndex: 1 }}>
                <HomePortadaCompt
                    styleDefault="C"
                    bkImagen="/homePortadas/PortadaC.jpg"
                    textPortada="Somos representantes de las marcas más 
                                reconcidas a nivel mundial. Nuestras soluciones cuentan con certificaciones internacionales y un servicio post venta especializado que garantiza su inversión."
                    btnText= "Conoce Nuestra Calidad"
                    linkToPage="/nuestra-calidad"
                />
            </div>

         </div>

    </div>
  );
}
