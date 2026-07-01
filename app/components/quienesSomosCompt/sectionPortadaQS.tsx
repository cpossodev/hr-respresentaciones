"use client"

//Impor Link
import Link from 'next/link';

//Import Css
import sectionPortadaQS from '../../styles/quienesSomosStyles/sectionPortadaQS.module.css'

//Import React
import { useState, useEffect} from 'react';

// Background QS
const bkImagenQS = [
    "/bkQuienesSomos/BkQS01.jpg",
    "/bkQuienesSomos/BkQS02.jpg",
    "/bkQuienesSomos/BkQS03.jpg",
    "/bkQuienesSomos/BkQS04.jpg"
]


// TitleQS
const titleQS = [
    "SOBRE NOSOTROS",
    "NUESTRA TRAYECTORIA",
    "NUESTRAS MARCAS",
    "STAFF PROFESIONAL"
]

// Textos QS
const textQS = [

    //Texto Sobre Nosotros
    "HR Representaciones, empresa fundada en 1985, con vasta experiencia en la importación y distribución de equipos científicos para laboratorios, industrias y enseñanza. Nos destacamos por nuestra capacidad para ofrecer soluciones innovadoras con tecnología de clase mundial que superan las expectativas de nuestros clientes.",

    // Texto Nuestra Trayectoria
    "HR Representaciones, con 40 años de trayectoria, se ha consolidado como líder en la comercialización de soluciones tecnológicas para laboratorios, industria y enseñanza. Reconocida en todo el Ecuador, ha brindado confianza a instituciones públicas y privadas del sector hospitalario, industrial y educativo, ofreciendo productos innovadores, certificados internacionalmente y con tecnología de punta.",

    // Texto Nuestras Marcas
    "HR Representaciones distribuye marcas globales de origen europeo, reconocidas por su innovación y certificaciones de calidad internacional. Como distribuidor directo en Ecuador, garantiza productos de tecnología de punta con respaldo mundial, ofreciendo servicio postventa, asistencia personalizada y programas de capacitación que fortalecen la confianza de sus clientes en sectores hospitalarios, industriales y educativos.",

    // Texto Staff Profesional
    "HR Representaciones cuenta con un staff profesional altamente capacitado y con amplia experiencia, comprometido en brindar soluciones confiables y oportunas a nuestros clientes. Nuestro equipo incluye especialistas en cada área de servicio, ofreciendo asistencia personalizada y soporte oportuno en cada paso."

]

const numBotton: number[] = [0, 1, 2, 3];


export default function SectionPortadaQScompt() {



    const [ indexDataQS, setIndexDataQS ] = useState(0);
    const [animate, setAnimate] = useState(false);



  useEffect(() => {
    // activa animación cada vez que cambia el índice
    setAnimate(true);

    // resetea el flag después de 600ms, pero el cuadro queda visible
    const timer = setTimeout(() => setAnimate(false), 600);
    return () => clearTimeout(timer);
  }, [indexDataQS]);


    return(

        <div className={sectionPortadaQS.containerAllQS}>

            {/* CONTENDOR MENU QUIENES SOMOS */}
            <div className={sectionPortadaQS.panelMenuQS}>

                <div className={sectionPortadaQS.boxLinkMenuQS}>

                    {/* // Boton 1  - HR Representaciones */}
                    <button 
                          onClick={() => {setIndexDataQS(0); setAnimate(true);}}
                        className={`${sectionPortadaQS.buttonMenuQs} ${sectionPortadaQS.buttonHRreprest} ${indexDataQS === 0 ? sectionPortadaQS.buttonQSActive: ""}`}>
                            <p className={`${sectionPortadaQS.textButtonQS} ${sectionPortadaQS.textHRreprest}`}>HR Representaciones</p>
                            <span className={`material-symbols-outlined ${sectionPortadaQS.arrowBtnQS}`}>keyboard_arrow_right</span>
                    </button>

                    {/* // Boton 1  - Trayectoria */}
                    <button 
                        onClick={() => {setIndexDataQS(1); setAnimate(true);}}
                        className={`${sectionPortadaQS.buttonMenuQs} ${sectionPortadaQS.buttonTrayectoria} ${indexDataQS === 1 ? sectionPortadaQS.buttonQSActive: ""}`}>
                            <p className={`${sectionPortadaQS.textButtonQS} ${sectionPortadaQS.textTrayectoria}`}>Trayectoria</p>
                            <span className={`material-symbols-outlined ${sectionPortadaQS.arrowBtnQS}`}>keyboard_arrow_right</span>
                    </button>

                    {/* // Boton 3  - Nuestras Marcas */}
                    <button 
                        onClick={() => {setIndexDataQS(2); setAnimate(true);}}
                        className={`${sectionPortadaQS.buttonMenuQs} ${sectionPortadaQS.buttonMarcas} ${indexDataQS === 2 ? sectionPortadaQS.buttonQSActive: ""}`}>
                            <p className={`${sectionPortadaQS.textButtonQS} ${sectionPortadaQS.textMarcas}`}>Nuestras Marcas</p>
                            <span className={`material-symbols-outlined ${sectionPortadaQS.arrowBtnQS}`}>keyboard_arrow_right</span>
                    </button>

                    {/* // Boton 4  - Staff Profesional */}
                    <button 
                        onClick={() => {setIndexDataQS(3); setAnimate(true)}}
                        className={`${sectionPortadaQS.buttonMenuQs} ${sectionPortadaQS.buttonStaffProfesional} ${indexDataQS === 3 ? sectionPortadaQS.buttonQSActive: ""}`}>
                            <p className={`${sectionPortadaQS.textButtonQS} ${sectionPortadaQS.textStaffProfesional}`}>Staff Profesional</p>
                            <span className={`material-symbols-outlined ${sectionPortadaQS.arrowBtnQS}`}>keyboard_arrow_right</span>
                    </button>

                </div>

            </div>

            {/* CONTENEDOR BACKGROUND */}
            <div className={sectionPortadaQS.boxBKImagenQS} style={{ backgroundImage: `url(${bkImagenQS[indexDataQS]})` }}>
      
                <div
                    key={indexDataQS}
                    className={`${sectionPortadaQS.boxTextInfoQS} ${animate ? sectionPortadaQS.animateActive : ""}`}
                    >
                    <h2 className={sectionPortadaQS.titleQS}>{titleQS[indexDataQS]}</h2>
                    <p className={sectionPortadaQS.TextQS}>{textQS[indexDataQS]}</p>
                </div>

            </div>

            {/* BOTONES MOVILES */}
            <div className={sectionPortadaQS.boxButtonMobile}>

                    <button onClick={() => {setIndexDataQS(0); setAnimate(true);}} className={`${sectionPortadaQS.bntIndexMobile} ${sectionPortadaQS.bntIndexMobile1}  ${indexDataQS === 0 ? sectionPortadaQS.bntIndexMobileActive : ""}`}>1</button>
                    <button onClick={() => {setIndexDataQS(1); setAnimate(true);}} className={`${sectionPortadaQS.bntIndexMobile} ${sectionPortadaQS.bntIndexMobile2}  ${indexDataQS === 1 ? sectionPortadaQS.bntIndexMobileActive : ""}`}>2</button>
                    <button onClick={() => {setIndexDataQS(2); setAnimate(true);}} className={`${sectionPortadaQS.bntIndexMobile} ${sectionPortadaQS.bntIndexMobile3}  ${indexDataQS === 2 ? sectionPortadaQS.bntIndexMobileActive : ""}`}>3</button>
                    <button onClick={() => {setIndexDataQS(3); setAnimate(true);}} className={`${sectionPortadaQS.bntIndexMobile} ${sectionPortadaQS.bntIndexMobile4}  ${indexDataQS === 3 ? sectionPortadaQS.bntIndexMobileActive : ""}`}>4</button>

            </div>

        </div>


    );
}