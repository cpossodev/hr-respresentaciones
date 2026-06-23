"use client"

import Link from 'next/link';
import { useState } from 'react';


// import Css
import nosotrosHomeComptStyles from '../../../styles/homeStyles/nosotrosHomeCompt.module.css'

// Import Component
import BoxTextNosotros from './boxTextNosotrosCompt';


export default function NosotrosHomeComponent() {

    const [indexInfo, setIndexInfo] = useState(0)


  // Datos en arrays
  const titles = [
    "Nosotros",
    "Línea de Productos",
    "Asesoría y Asistencia Integral"
  ];

  const textos = [
    "Contamos con una amplia gama de equipos científicos, suministros e instrumentos de medición de alta precisión. Ofrecemos soluciones de nivel profesional para laboratorios de análisis y diagnóstico clínico. Bioseguridad Hospitalaria, Sector industrial y Petrolero. Contamos con modelos anatómicos y material de estudio para Universidades, Instituciones Educativas y Centros de Investigación Científica.",
    "Nuestro portafolio incluye una amplia gama de Equipos para Laboratorios como Autoclaves, Incubadoras, Hornos. Instrumentos de medición de alta precisión como: Fotómetros, Espectrofotómetros, Refractómetros. Suministros consumibles como: Reactivos Químicos Analíticos, Bioanálisis, Test Rápidos y mucho más.",
    "Asesoramos cada paso de su compra con asistencia técnica especializada presencial. Contamos con un staff técnico altamente capacitado y listo para brindarle soluciones a medida. Nuestro servicio post venta le garantiza un amplio stock de repuesto, servicio técnico experto y un programa de capacitación para sus colaboradores y operadores."
  ];

  const bkNosotros = [
    "/bkNosotros/bkNosotro-1.png",
    "/bkNosotros/bkNosotro-2.png",
    "/bkNosotros/bkNosotro-3.png"

  ];

  const linksToPage = [
    "/quienes-somos",
    "/tienda-online",
    "/nuestra-calidad"
  ];

  const nameLinks = [
    "Conoce más sobre nosotros",
    "Ir a tienda de productos",
    "Conoce más sobre nuestra calidad"
  ]

// Datos Box Nosotros Componente
/*
 const titleTextNostros: string = "Nosotros"
 const titleLineaProductos: string = "Línea de Productos"
 const titleAsistencia: string = "Asesoría y Asistencia Integral"
 const textParrafoNosotros: string = "Contamos con una amplia gama de equipos científicos, suministros e instrumentos de medición de alta precisión. Ofrecemos soluciones de nivel profesional para laboratorios de análisis y diagnóstico clínico. Bioseguridad Hospitalaria, Sector industrial y Petrolero. Contamos con modelos anatómicos y material de estudio para Universidades, Instituciones Educativas y Centros de Investigación Científica.  "
 const textParrafoLineaProductos: string = "Nuestro portafolio incluye una amplia gama de Equipos para Laboratorios como Autoclaves, Incubadoras, Hornos. Instrumentos de medición de alta precisión como: Fotómetros, Espectrofotómetros, Refractómetros. Suministros consumibles como: Reactivos Químicos Analíticos, Bioanálisis, Test Rápidos y mucho más. "
 const textParrafoAsistencia: string = "Asesoramos cada paso de su compra con asistencia técnica especializada presencial. Contamos con un staff técnico altamente capacitado y listo para brindarle soluciones a medida. Nuestro servicio post venta le garantiza un amplio stock de repuesto, servicio técnico experto y un programa de capacitación para sus colaboradores y operadores."
*/

    return(

        <div className={nosotrosHomeComptStyles.contentNosotros}>

            <div className={nosotrosHomeComptStyles.boxTextNosotros}>

                <BoxTextNosotros 
                
                   titleBox={titles[indexInfo]}
                   textParrafo={textos[indexInfo]}
                
                />
            
                <div className={nosotrosHomeComptStyles.boxBTNNosotros}>

                    <button onClick={() => setIndexInfo(0)} className={`${nosotrosHomeComptStyles.bntIndex} ${nosotrosHomeComptStyles.bntIndex1}  ${indexInfo === 0 ? nosotrosHomeComptStyles.bntIndexActive : ""}`}>1</button>
                    <button onClick={() => setIndexInfo(1)} className={`${nosotrosHomeComptStyles.bntIndex} ${nosotrosHomeComptStyles.bntIndex2}  ${indexInfo === 1 ? nosotrosHomeComptStyles.bntIndexActive : ""}`}>2</button>
                    <button onClick={() => setIndexInfo(2)} className={`${nosotrosHomeComptStyles.bntIndex} ${nosotrosHomeComptStyles.bntIndex3}  ${indexInfo === 2 ? nosotrosHomeComptStyles.bntIndexActive : ""}`}>3</button>

                </div>

            </div>

            <div className={nosotrosHomeComptStyles.contentPictureNosotros}>     

              <div className={nosotrosHomeComptStyles.pictureNosotros} style={{ backgroundImage: `url(${bkNosotros[indexInfo]})`, backgroundSize: "cover"}}>

                  <div className={nosotrosHomeComptStyles.boxLinkToPage}>

                      <Link className={nosotrosHomeComptStyles.LinkTopage} href={linksToPage[indexInfo]} >{nameLinks[indexInfo]} <span className="material-symbols-outlined">keyboard_arrow_right</span></Link>

                  </div>
              
              </div>

            </div>
        </div>


    );
}