"use client"
import { useEffect, useState } from "react";


// Import Css
import botonWhatsAppStyle from '../redesBoxCompt/botonWhatsApp.module.css'

export default function BotonWhatsApp() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY; // cuánto se ha scrolleado
            const windowHeight = window.innerHeight; // altura visible
            const docHeight = document.documentElement.scrollHeight; // altura total del documento

            // distancia desde el final
            const distanceFromBottom = docHeight - (scrollTop + windowHeight);

            // si estamos a menos de 200px del final, ocultar
            setIsVisible(distanceFromBottom > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return(
        <div
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
    );
}
