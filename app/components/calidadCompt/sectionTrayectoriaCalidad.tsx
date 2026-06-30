
//Import Css
import SectTrayectCalidStyles from '../../styles/calidadStyles/sectionTrayectoriaCalidad.module.css'

export default function SectionTrayectoriaCalidad() {

    return(

        <div className={SectTrayectCalidStyles.allContentTrayectCalid}> 
        
            {/* BOX TITLE 40 AÑOS */}
            <div className={SectTrayectCalidStyles.boxTitleTrayectCalid}>

                <p className={SectTrayectCalidStyles.text40anos}>40 AÑOS</p>
                <p className={SectTrayectCalidStyles.textTrayectConfianza}>DE TRAYECTORIA CONTRUYENDO CONFIANZA</p>

            </div>

            {/* BOX PHOTO CAJA COLOR */}
            <div className={SectTrayectCalidStyles.boxContentPhotos}>

                {/* CAJA COLOR */}
                <div className={SectTrayectCalidStyles.boxColorBase}>

                    <img className={SectTrayectCalidStyles.photoImgTrayectCalid} src="/calidadAssets/photoTrayectSectCalidad.jpg"/>

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