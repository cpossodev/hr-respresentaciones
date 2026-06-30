// Import CSS
import sectSoluEspStyles from '../../styles/calidadStyles/sectionSolucionesEsp.module.css'



export default function SectionSolucionesEsp() {
    return(
        <div className={sectSoluEspStyles.allContentSolEsp}>

            <div className={sectSoluEspStyles.boxBlockInfo_A}>


                    <div className={sectSoluEspStyles.contentBoxColorTitle}>
                        <div className={sectSoluEspStyles.boxColorSolEsp}></div>
                        <div className={sectSoluEspStyles.boxTitleSolEsp}>
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