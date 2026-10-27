"use client"
import { useEffect, useState } from "react";
import Link from "next/link";


// Import Css
import botonWhatsAppStyle from '../redesBoxCompt/botonWhatsApp.module.css'
import botonWtsBoxUPStyle from '../redesBoxCompt/botonWtsBoxUP.module.css'


import iconMensaje from '@/public/logoWhatsApp/iconAnimacionMensaje.svg';


export default function BotonWhatsApp() {
    const [isVisible, setIsVisible] = useState(true);
    const [boxOpen, setBoxOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY; // cuánto se ha scrolleado
            const windowHeight = window.innerHeight; // altura visible
            const docHeight = document.documentElement.scrollHeight; // altura total del documento

            // distancia desde el final
            const distanceFromBottom = docHeight - (scrollTop + windowHeight);

            // si estamos a menos de 200px del final, ocultar
            setIsVisible(distanceFromBottom > 500);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return(

        // EL CONTENEDOR DE TODO EL COMPONENTE
       <div className={botonWhatsAppStyle.contentAllBwts}>

            {/* BOX WHATSAPP - Usa otro archivo css */}
            <div className={`
            ${botonWtsBoxUPStyle.boxWtsLinks} 
            ${boxOpen ? botonWtsBoxUPStyle.boxWtsLinksOpen : ''}
                 `}>

                {/* CABECERA LOGO */}
                <div className={botonWtsBoxUPStyle.blockHeaderWtsLinks}>

                    <div className={botonWtsBoxUPStyle.boxLogoWts}>
                        <img className={botonWtsBoxUPStyle.logoWtsBoxBotton} src="/logoWhatsApp/iconWtsBoxBotton.svg" alt="Whatsapp" />

                    </div>


                     <div className={botonWtsBoxUPStyle.boxAnimationMesseger}>

            
                        <div className={botonWtsBoxUPStyle.boxIconMensaje} style={{backgroundImage: `url(${iconMensaje.src})`}}>

                            <span className={`${botonWtsBoxUPStyle.puntoAnimate} ${botonWtsBoxUPStyle.puntoAnimate1}`}></span>
                            <span className={`${botonWtsBoxUPStyle.puntoAnimate} ${botonWtsBoxUPStyle.puntoAnimate2}`}></span>
                            <span className={`${botonWtsBoxUPStyle.puntoAnimate} ${botonWtsBoxUPStyle.puntoAnimate3}`}></span>

                        </div>

                    </div> 



                </div>

                {/* BODY BOTON LINKS */}
                <div className={botonWtsBoxUPStyle.boxBodyLinksWts}>

                    <div className={botonWtsBoxUPStyle.boxTextContact}>
                        <h2>CONTÁCTANOS</h2>
                    </div>

                    {/* LÍNEA DIVISORIA */}
                    <div className={botonWtsBoxUPStyle.lineDivisionWtsLinks}></div>


                    <div className={botonWtsBoxUPStyle.boxLinksContacts}>

                       {/* A - BOTON LINK TO WHATSAPP  */}
                        <Link 
                                href="https://wa.me/5939XXXXXXXX?text=Hola,%20estoy%20interesado%20en%20sus%20servicios" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={`${botonWtsBoxUPStyle.linkWtsFromBox} ${botonWtsBoxUPStyle.linkTo_A}`}
                            >

                            <span className={`${botonWtsBoxUPStyle.textLink} ${botonWtsBoxUPStyle.textLink_A}`}> Atención al Cliente</span>
                            <span className={`${botonWtsBoxUPStyle.iconSendLink} material-symbols-outlined`}>send</span>
                        
                        </Link>


                        {/* B - BOTON LINK TO WHATSAPP  */}
                        <Link 
                                href="https://wa.me/5939XXXXXXXX?text=Hola,%20estoy%20interesado%20en%20sus%20servicios" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={`${botonWtsBoxUPStyle.linkWtsFromBox} ${botonWtsBoxUPStyle.linkTo_B}`}
                            >

                            <span className={`${botonWtsBoxUPStyle.textLink} ${botonWtsBoxUPStyle.textLink_B}`}> Ventas 1</span>
                            <span className={`${botonWtsBoxUPStyle.iconSendLink} material-symbols-outlined`}>send</span>
                        
                        </Link>
               


                        {/* B - BOTON LINK TO WHATSAPP  */}
                        <Link 
                                href="https://wa.me/5939XXXXXXXX?text=Hola,%20estoy%20interesado%20en%20sus%20servicios" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={`${botonWtsBoxUPStyle.linkWtsFromBox} ${botonWtsBoxUPStyle.linkTo_C}`}
                            >

                            <span className={`${botonWtsBoxUPStyle.textLink} ${botonWtsBoxUPStyle.textLink_C}`}> Ventas 2</span>
                            <span className={`${botonWtsBoxUPStyle.iconSendLink} material-symbols-outlined`}>send</span>
                        
                        </Link>


                    </div>


                    {/* LÍNEA DIVISORIA */}
                    <div className={botonWtsBoxUPStyle.lineDivisionWtsLinks}></div>


                    <div className={botonWtsBoxUPStyle.boxTextAtencion}>
                        <h3>¡Estamos listos para atenderte de lunes a viernes de 8h00 a 18h00!</h3>
                    </div>



                </div>



                {/* FOOTER CERRAR */}
                <div className={botonWtsBoxUPStyle.boxFooterCerrar}>

                    <button 
                    onClick={() => setBoxOpen(false)}

                    className={botonWtsBoxUPStyle.btnCerrar}>Cerrar</button>
                    
                </div>


            </div>


            <div
                onClick={() => setBoxOpen(true)}
                className={botonWhatsAppStyle.contentBottonWTS}
                style={{
                    transition: "opacity 0.3s ease",
                    opacity: isVisible ? 1 : 0
                }}
  
            >
                <span className={`${botonWhatsAppStyle.lineOrbit} ${botonWhatsAppStyle.lineOrbit1}`}></span>
                <span className={`${botonWhatsAppStyle.lineOrbit} ${botonWhatsAppStyle.lineOrbit2}`}></span>
                <img
                    className={botonWhatsAppStyle.LogoWhatsApp}
                    src="/logoWhatsApp/Icon-Whatsapp-oficial.svg"
                    alt="WhatsApp"
                />

            </div>

        </div> 
        
    );
}
