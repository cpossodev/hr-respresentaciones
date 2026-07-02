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
                        <h2>SOLUCIONES ESPECIALIZADAS DE ALTO NIVEL</h2>
                    </div>
                </div>

            </div>


            <div className={sectSoluEspStyles.boxBlockInfo_B}>

                <p> En HR Representaciones entendemos que cada laboratorio, 
                    industria y centro académico requiere 
                    herramientas confiables y adaptadas a sus exigencias. 
                    Por eso ofrecemos un portafolio de productos con 
                    soluciones especializadas de alto nivel que garantizan 
                    precisión, seguridad y eficiencia en cada proceso.
                </p>


                <p> Marcas como JP SELECTA, con sus equipos de 
                    incubación y esterilización, y ELITECH, con 
                    sistemas avanzados de monitoreo de temperatura, 
                    son parte de nuestro catálogo y reflejan el compromiso de 
                    HR con la excelencia.
                </p>


            </div>



        </div>


    );
}