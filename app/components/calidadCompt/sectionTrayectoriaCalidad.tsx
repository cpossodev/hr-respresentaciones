"use client"
//Import React
import { useEffect, useRef, useState } from 'react';

//Import Css
import SectTrayectCalidStyles from '../../styles/calidadStyles/sectionTrayectoriaCalidad.module.css'

export default function SectionTrayectoriaCalidad() {

const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // opcional: solo dispara una vez
                }
            },
            { threshold: 0.5 } // 30% visible para activar
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);



    return(

        <div 
            ref={sectionRef}  
            className={SectTrayectCalidStyles.allContentTrayectCalid}> 
        
            {/* BOX TITLE 40 AÑOS */}
            <div className={SectTrayectCalidStyles.boxTitleTrayectCalid}>

                <p className={SectTrayectCalidStyles.text40anos}>40 AÑOS</p>
                <p className={SectTrayectCalidStyles.textTrayectConfianza}>DE TRAYECTORIA CONTRUYENDO CONFIANZA</p>

            </div>


            {/* BOX COLOR FOTO */}
            <div className={SectTrayectCalidStyles.boxContentPhotos}>
                <div className={`${SectTrayectCalidStyles.boxColorBase} ${isVisible ? SectTrayectCalidStyles.animateBox : ''}`}>
                    <img 
                        className={`${SectTrayectCalidStyles.photoImgTrayectCalid} ${isVisible ? SectTrayectCalidStyles.animatePhoto : ''}`} 
                        src="/calidadAssets/photoTrayectSectCalidad.jpg"
                    />
                </div>
            </div>


            <div className={SectTrayectCalidStyles.boxParrafTrayectCalid}>

                <p className={SectTrayectCalidStyles.parrafTrayectCalidad}>

                    En HR Representaciones nos enorgullece ser parte activa en el 
                    desarrollo tecnológico y científico de reconocidas instituciones y 
                    empresas del Ecuador que confían en la calidad de nuestros productos y el 
                    respaldo de nuestros servicios.

                </p>

            </div>


        </div>



    );
}