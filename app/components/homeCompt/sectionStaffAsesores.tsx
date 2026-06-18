

//Import Css
import SaffAsesoresStyles from '../../styles/sectionStaffAsesores.module.css'

//Import Component
import AsesorContactCompt from './asesorContactCompt';


export default function SectionStaffAsesores() {


    // DATOS ASESORES
    
    const WtsAsesor1: string = "593992818717"; 
    const WtsAsesor2: string = "593992818717"; 
    const WtsAsesor3: string = "593992818717"; 
    const WtsAsesor4: string = "593992818717"; 
    const WtsAsesor5: string = "593992818717"; 
    const WtsAsesor6: string = "593992818717"; 

    
    return(

        <div className={SaffAsesoresStyles.contentStaffAsesores}>

            <div className={SaffAsesoresStyles.boxTitleTextAs}>

                <h2 className={SaffAsesoresStyles.titleAs}>NUESTROS EQUIPO DE ASESORES</h2>

                <p className={SaffAsesoresStyles.subtitleAs}>
                    Contamos con un equipo de asesores especializados listos para brindarle una 
                    atención personalizada y soporte técnico
                </p>

            </div>
            
            <div className={SaffAsesoresStyles.boxContentAsesores}>

                
                    <AsesorContactCompt
                        urlBkImgAsesor = "/imgAsesores/Asesor1.jpg"
                        nameAsesor = "Andréa Morales Figueroa"
                        cargoAsesor = "Asesora Comercial"
                        whatsAppAsesor = {WtsAsesor1}
                    
                    />

                    <AsesorContactCompt
                        urlBkImgAsesor = "/imgAsesores/Asesor2.jpg"
                        nameAsesor = "Andréa Morales Figueroa"
                        cargoAsesor = "Asesora Comercial"
                        whatsAppAsesor = {WtsAsesor2}
                    
                    />

                    <AsesorContactCompt
                        urlBkImgAsesor = "/imgAsesores/Asesor3.jpg"
                        nameAsesor = "Andréa Morales Figueroa"
                        cargoAsesor = "Asesora Comercial"
                        whatsAppAsesor = {WtsAsesor3}
                    
                    />

                    <AsesorContactCompt
                        urlBkImgAsesor = "/imgAsesores/Asesor1.jpg"
                        nameAsesor = "Andréa Morales Figueroa"
                        cargoAsesor = "Asesora Comercial"
                        whatsAppAsesor = {WtsAsesor4}
                    
                    />

                    <AsesorContactCompt
                        urlBkImgAsesor = "/imgAsesores/Asesor2.jpg"
                        nameAsesor = "Andréa Morales Figueroa"
                        cargoAsesor = "Asesora Comercial"
                        whatsAppAsesor = {WtsAsesor5}
                    
                    />

                    <AsesorContactCompt
                        urlBkImgAsesor = "/imgAsesores/Asesor3.jpg"
                        nameAsesor = "Andréa Morales Figueroa"
                        cargoAsesor = "Asesora Comercial"
                        whatsAppAsesor = {WtsAsesor6}
                    
                    />

            </div>



        </div>


    );
}