"use client"

//Import React
import {useState, useRef, useEffect} from 'react'


// Import CSS
import sectSoluEspStyles from '../../styles/calidadStyles/sectionSolucionesEsp.module.css'



export default function SectionSolucionesEsp() {



        const sectionRef = useRef(null);
        const [isAnimate, setIsAnimate] = useState(false);


        useEffect(() => {
            const observer = new IntersectionObserver(
                (entries) => {
                    const entry = entries[0];
                    if (entry.isIntersecting) {
                        setIsAnimate(true);
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
            className={sectSoluEspStyles.allContentSolEsp}>

            <div className={sectSoluEspStyles.boxBlockInfo_A}>

                <div className={sectSoluEspStyles.contentBoxColorTitle}>
                    <div className={`${sectSoluEspStyles.boxColorSolEsp} ${isAnimate ? sectSoluEspStyles.boxColorAnimate : ''}`}></div>
                    <div className={`${sectSoluEspStyles.boxTitleSolEsp} ${isAnimate ? sectSoluEspStyles.boxTitleAnimate : ''}`}>
                        <h2>EQUIPOS Y SOLUCIONES DE ALTA PRECISIÓN</h2>
                    </div>
                </div>

            </div>


            <div className={sectSoluEspStyles.boxBlockInfo_B}>

                <p> 
                    Diseñamos un portafolio integral enfocado en la exactitud analítica 
                    y la repetibilidad de sus procesos. Desde avanzados instrumentos 
                    de medición electroquímica y reactivos analíticos de alta pureza,
                    hasta material de vidrio volumétrico de máxima resistencia; marcas de 
                    prestigio global como APERA, MACHEREY-NAGEL e ISOLAB se convierten en 
                    los aliados estratégicos indispensables para laboratorios clínicos, 
                    industriales y académicos en todo el Ecuador. 

                </p>


                <p> 
                    En HR Representaciones entendemos que cada sector tiene desafíos únicos 
                    que exigen herramientas confiables, normadas y adaptadas a su operación. 
                    Por ello, proveemos soluciones tecnológicas avanzadas que optimizan la 
                    seguridad, control y eficiencia de sus actividades diarias. 
                    Contamos con la ingeniería de JP SELECTA para sistemas críticos de incubación y 
                    esterilización, y la tecnología de ELITECH para el monitoreo automatizado de
                    temperatura, consolidando nuestro compromiso absoluto con la excelencia técnica 

                </p>


            </div>



        </div>


    );
}