"use client"

//Import Css
import footerStyles from '../styles/footer.module.css'


export default function Footer() {
    return(
        <div className={footerStyles.contentAllFooter}>
 
            {/* Bloque de contactos */}
            <div className={footerStyles.boxBlockContacts}>

                {/* Box Siguenos */}
                <div className={footerStyles.boxSiguenos}>

                    <h3 className={`${footerStyles.titleContacts} ${footerStyles.titleSiguenos}`}>Síguenos</h3>

                    <div className={footerStyles.boxRedesSociales}>
                        <img className={`${footerStyles.logoRedes} ${footerStyles.logoLinkdIn}`} src="/footerAssets/Icon-LinkedIn.svg" />
                        <img className={`${footerStyles.logoRedes} ${footerStyles.logoRedX}`} src="/footerAssets/Icon-RedX.svg" />
                        <img className={`${footerStyles.logoRedes} ${footerStyles.logoInstagram}`} src="/footerAssets/Icon-Instagram.svg" />
                    </div>

                </div>


                {/* Box Visitanos */}
                <div className={footerStyles.boxVisitanos}>

                    <h3 className={`${footerStyles.titleContacts} ${footerStyles.titleVisitanos}`}>Visítanos</h3>

                    <div className={footerStyles.boxDireccion}>

                        <img className={`${footerStyles.IconContact} ${footerStyles.IconMaps}`} src="/footerAssets/Icon-Maps.svg" />
                        <p className={footerStyles.textDireccion}>Isla Genovesa N41-30 e Isla Floreana</p>

                    </div>


                </div>


                {/* Box Llamanos */}
                <div className={footerStyles.boxLlamanos}>

                    <h3 className={`${footerStyles.titleContacts} ${footerStyles.titleLlamanos}`}>Llamanos</h3>

                    <div className={footerStyles.boxIconNumTelf}>

                        <img className={`${footerStyles.IconContact} ${footerStyles.IconTelf}`} src="/footerAssets/Icon-Telf.svg" />

                        <p className={footerStyles.textNumTelf}>(02) 2444156  - (02) 2253120 - (02) 2444154</p>

                    </div>

                </div>


                {/* Box Email */}
                <div className={footerStyles.boxEmail}>

                    <h3 className={`${footerStyles.titleContacts} ${footerStyles.titleEmail}`}>Email</h3>

                    <div className={footerStyles.boxEmailAdress}>

                        <img className={`${footerStyles.IconContact} ${footerStyles.IconEmail}`} src="/footerAssets/Icon-Email.svg" />

                        <p className={footerStyles.textAdress}>info@hrrepresentaciones.com</p>

                    </div>


                </div>



            </div>


            {/* Bloque Logo */}
            <div className={footerStyles.boxBlockLogoCopyrigth}>


                <div className={footerStyles.boxLogoFooter}>

                    <img className={footerStyles.logoFooter} src="/footerAssets/Icon-LogoHRfooter.svg" />

                    <p className={footerStyles.textCopyrigth}>Copyright ©</p> 

                </div>
                

            </div>


        </div>
    );
}