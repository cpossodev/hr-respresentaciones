"use client"

// import Link
import Link from "next/link";
import { useContext } from "react";
import { MenuContext } from "./menuProvider";

// Import Css
import menuPanelMobileStyles from "../styles/menuPanelMobile.module.css"


export default function PanelMainMenuMobile() {

        const menuContext = useContext(MenuContext);
        if (!menuContext) return null;

        const { isOpen, setIsOpen } = menuContext;

    return(

        /* ///// PANEL MENU MOBILE //////// */

        <div className={`${menuPanelMobileStyles.menuMobilePanel} ${ isOpen ? menuPanelMobileStyles.open: ""}`}>

    
            <div className={menuPanelMobileStyles.boxIrATienda}>

                <Link  
                    href="/tienda-online"
                    className={menuPanelMobileStyles.boxBTNirAtienda}
                    onClick={() => {
                    // navegación ocurre inmediatamente (Next Link lo maneja)
                    // el cambio de estado se retrasa 300ms
                    setTimeout(() => {
                    setIsOpen(!isOpen);
                    }, 700);
                     }}>

                    <div className={menuPanelMobileStyles.boxIconShopping}>

                        <img className={menuPanelMobileStyles.IconLinkCompras} src="/IconsMainMenu/IconShoppingBagA.svg"/> 
                        {/* <img className={menuPanelMobileStyles.IconLinkCompras} src="/IconsMainMenu/IconShoppingBagB.svg"/>  */}

                    </div>

                    <p className={menuPanelMobileStyles.textLink}>Tienda</p>
                    <span className={`material-symbols-outlined  ${menuPanelMobileStyles.arrowRight}`}>keyboard_arrow_right</span>
                    
                </Link>

            </div>


            {/* // Línea Divisoria */}
            <div className={menuPanelMobileStyles.lineDivisorPanelMobile}></div>


            <div className={menuPanelMobileStyles.boxLinksToPages}> 

                <Link onClick={() => setIsOpen(!isOpen)} href={"/tienda-online"} className={`${menuPanelMobileStyles.boxLinkPage} ${menuPanelMobileStyles.boxBTNInicio}`}>

                    <p className={`${menuPanelMobileStyles.textLink} ${menuPanelMobileStyles.textLinkInicio}`}>Inicio</p>
                    
                </Link>

                <Link onClick={() => setIsOpen(!isOpen)} href={"/tienda-online"} className={`${menuPanelMobileStyles.boxLinkPage} ${menuPanelMobileStyles.boxBTNQuienesSomos}`}>

                    <p className={`${menuPanelMobileStyles.textLink} ${menuPanelMobileStyles.textLinkTienda}`}>Quienes Somos</p>
                    
                </Link>

                <Link onClick={() => setIsOpen(!isOpen)} href={"/tienda-online"} className={`${menuPanelMobileStyles.boxLinkPage} ${menuPanelMobileStyles.boxBTNCalidad}`}>

                    <p className={`${menuPanelMobileStyles.textLink} ${menuPanelMobileStyles.textLinkCalidad}`}>Calidad</p>
                    
                </Link>
                
                <Link onClick={() => setIsOpen(!isOpen)} href={"/tienda-online"} className={`${menuPanelMobileStyles.boxLinkPage} ${menuPanelMobileStyles.boxBTNContacto}`}>

                    <p className={`${menuPanelMobileStyles.textLink} ${menuPanelMobileStyles.textLinkContacto}`}>Contacto</p>
                    
                </Link>

            </div>

            {/* // Línea Divisoria */}
            <div className={menuPanelMobileStyles.lineDivisorPanelMobile}></div>

            <div className={menuPanelMobileStyles.boxLogoPanelMobile}>

                    <img className={menuPanelMobileStyles.logoPanelMobile} src="/logotipos/logoMainMenu.svg" />           
            
            </div>



        </div>

    );
}