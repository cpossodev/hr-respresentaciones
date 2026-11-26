

//Import Css
import SaffAsesoresStyles from '../../../styles/homeStyles/sectionStaffAsesores.module.css'

//Import Component
import AsesorContactCompt from './asesorContactCompt';


export default function SectionStaffAsesores() {


    // DATOS ASESORES
    
    const WtsAsesor1: string = "593963956870"; 
    const WtsAsesor2: string = "593963966407"; 
    const WtsAsesor3: string = "593963907860"; 
    const WtsAsesor4: string = "593963906955"; 
    const WtsAsesor5: string = "593993819433"; 
    const WtsAsesor6: string = "593995866092"; 

    
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
                        urlBkImgAsesor = "/imgAsesores/DiegoRueda.jpg"
                        nameAsesor = "Mgtr. Diego Rueda"
                        cargoAsesor = "Asesor Comercial"
                        whatsAppAsesor = {WtsAsesor1}
                    
                    />

                    <AsesorContactCompt
                        urlBkImgAsesor = "/imgAsesores/HenryMoreno.jpg"
                        nameAsesor = "Henry Moreno"
                        cargoAsesor = "Asesor Comercial"
                        whatsAppAsesor = {WtsAsesor2}
                    
                    />

                    <AsesorContactCompt
                        urlBkImgAsesor = "/imgAsesores/CatalinaCaicedo.jpg"
                        nameAsesor = "Catalina Caicedo"
                        cargoAsesor = "Asesor Comercial"
                        whatsAppAsesor = {WtsAsesor3}
                    
                    />

                    <AsesorContactCompt
                        urlBkImgAsesor = "/imgAsesores/AnthonyToledo.jpg"
                        nameAsesor = "Eco. Anthony Toledo"
                        cargoAsesor = "Asesor Comercial"
                        whatsAppAsesor = {WtsAsesor4}
                    
                    />

                    <AsesorContactCompt
                        urlBkImgAsesor = "/imgAsesores/LuciaCruz.jpg"
                        nameAsesor = "Lucía Cruz"
                        cargoAsesor = "Asesor Comercial"
                        whatsAppAsesor = {WtsAsesor5}
                    
                    />

                    <AsesorContactCompt
                        urlBkImgAsesor = "/imgAsesores/SamathaCarrera.jpg"
                        nameAsesor = "Samatha Carrera"
                        cargoAsesor = "Asesor Comercial"
                        whatsAppAsesor = {WtsAsesor6}
                    
                    />

            </div>

        </div>

    );
}