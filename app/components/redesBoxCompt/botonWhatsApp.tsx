
// Import Css
import botonWhatsAppStyle from '../redesBoxCompt/botonWhatsApp.module.css'


export default function BotonWhatsApp() {

    return(

        <div className={botonWhatsAppStyle.contentBottonWTS}>
            <span className={`${botonWhatsAppStyle.lineOrbit} ${botonWhatsAppStyle.lineOrbit1}`}></span>
            <span className={`${botonWhatsAppStyle.lineOrbit} ${botonWhatsAppStyle.lineOrbit2}`}></span>
            <img className={botonWhatsAppStyle.LogoWhatsApp} src="/logoWhatsApp/Icon-Whatsapp-oficial.svg" />

        </div>

    );

}