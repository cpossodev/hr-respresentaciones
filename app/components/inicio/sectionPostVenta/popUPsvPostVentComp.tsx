 "use client"
//Import Css
 import popUPsvStyles from '../../../styles/mainMenuStyles/popUPservPostVent.module.css'


const photosServPostVent = [ 
    "/imgServPostVent/Asesoramiento.jpg",
    "/imgServPostVent/ServicioPost.jpg",
    "/imgServPostVent/Capacitacion.jpg",
    "/imgServPostVent/Satisfaccion.jpg",
 ];


const iconsServPostVent = [
    "/IconsPostventas/Icon-Asesoramiento-B.svg",
    "/IconsPostventas/Icon-Serv-Tecnico-B.svg",
    "/IconsPostventas/Icon-Capacitacion-B.svg",
    "/IconsPostventas/Icon-Satisfaccion-B.svg",
]

const titleServPopUp = [
    "Asesoramiento Personalizado",
    "Servicio Técnico Post Venta",
    "Capacitación y Soporte Especializado",
    "Satisfacción Garantizada"
]


const textServPostVent = [
    "Optimice su inversión desde el primer día. Le acompañamos con asistencia técnica especializada y presencial para diseñar soluciones a la medida de sus procesos industriales o de laboratorio. Nuestro staff experto analiza sus necesidades específicas para asegurar que elija el equipamiento e insumos perfectos para su empresa.",
    "Protegemos la continuidad de su operación. Disponemos del servicio técnico más confiable del país, respaldado por un equipo de ingenieros calificados y un amplio stock permanente de repuestos originales de fábrica. Minimice los tiempos de inactividad de sus equipos con nuestro soporte de mantenimiento preventivo y correctivo.",
    "Garantice el máximo rendimiento de sus equipos. Contamos con un equipo de asesores certificados dedicados a capacitar a sus colaboradores y operadores en el manejo, configuración y correcta operación de cada tecnología adquirida. Elevamos la productividad de su personal y aseguramos la repetibilidad de sus análisis técnicos.",
    "Invierta con total tranquilidad. En HR Representaciones cada equipo, reactivo e instrumento cuenta con el respaldo de fábrica y sólidas garantías oficiales. Trabajamos exclusivamente con productos que cumplen rigurosas normas de certificación y aval internacional, asegurando un estándar de calidad insuperable en el Ecuador "
]




 export default function PopUPsvPostVentComp({idButton, openClosePopUP, onClose}: {idButton: number, openClosePopUP: boolean, onClose: () => void}) {

  if (!openClosePopUP) return null; // 👈 usamos la prop correcta
    return(

        <div className={popUPsvStyles.backScreen}>

            <div className={popUPsvStyles.contentPopUpSV}>

                {/* // Imagen Background */}
                <div className={popUPsvStyles.boxBKImagenPopUp} style={{ backgroundImage: `url(${photosServPostVent[idButton]})` }}> </div>

                <div className={popUPsvStyles.boxTextParrafPopUp}>

                    <div className={popUPsvStyles.boxIconTitle}>

                        <img className={popUPsvStyles.IconSvPopUp} src={iconsServPostVent[idButton]} />
                        <p className={popUPsvStyles.textTitlePopUp}>{titleServPopUp[idButton]}</p>

                    </div>

                    <div className={popUPsvStyles.boxTextPopUp}>

                            <p className={popUPsvStyles.textPopUp}>{textServPostVent[idButton]}</p>

                    </div>



                </div>

                <button onClick={onClose} className={popUPsvStyles.btnClosePopUp}>Cerrar</button>

            </div>
        </div>
    );
 }
 