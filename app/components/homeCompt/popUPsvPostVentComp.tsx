 "use client"
//Import Css
 import popUPsvStyles from '../../styles/popUPservPostVent.module.css'


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
    "Asesoramos cada paso de su compra con asistencia técnica especializada presencial. Contamos con un staff técnico altamente capacitado y listo para brindarle soluciones a la medida de su empresa.",
    "Contamos con un amplio stock de repuestos y un equipo altamente capacitado para brindarle soporte y asistencia personalizada con el mejor servicio técnico post venta del país.",
    "Contamos con un sólido equipos de asesores expertos listos para brindarle la capacitación necesaria a su personal para una correcta opración de los equip, insumos e instrumentos.",
    "En HR Representaciones cada producto cuenta con la garantía y el respaldo oficial del fabricante. Todos nuestros productos cuentan con normas de certificación y aval internacional."
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
 