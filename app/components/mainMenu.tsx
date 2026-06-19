"use client"

import Link from "next/link";
import { useState, useContext } from "react";
import { MenuContext } from "./menuProvider";

// Import Css
import mainMenuStyles from "../styles/mainMenu.module.css";

//Import Components
import LinksMainMenu from "./linksMainMenu";
import BotonWhatsApp from "../components/redesBoxCompt/botonWhatsApp"


export default function MainMenu() {

    const menuContext = useContext(MenuContext);
         if (!menuContext) return null;

        const { isOpen, setIsOpen} = menuContext;

  return (
    <nav className={mainMenuStyles.containerNav}>

        <div className={mainMenuStyles.containerMainMenu}>

            <div className={mainMenuStyles.boxLogoMainMenu}>

                <div className={mainMenuStyles.boxbtnMainMenu}>

                    <button onClick={() => setIsOpen(!isOpen)} className={mainMenuStyles.botonMainMenu}>
                        
                            <span className={`${mainMenuStyles.lineIconMain} ${isOpen ? mainMenuStyles.lineTop : "" }`}></span>
                            <span className={`${mainMenuStyles.lineIconMain} ${isOpen ? mainMenuStyles.lineMiddle : "" }`}></span>
                            <span className={`${mainMenuStyles.lineIconMain} ${isOpen ? mainMenuStyles.lineBottom : "" }`}></span>

                    </button>

                </div>

                <Link href="/">  
                    <img 
                    className={mainMenuStyles.logoMainMenu} 
                    src="/logotipos/logoMainMenu.svg" 
                    alt="Logo de la empresa" />  
                
                </Link> 
            </div>

            <div className={mainMenuStyles.boxLinksMainMenu}>
    
                <LinksMainMenu nameLink="Inicio" hrefLink="/"/>
                <LinksMainMenu nameLink="Quienes Somos" hrefLink="/quienes-somos"/>
                <LinksMainMenu nameLink="Nuestra Calidad" hrefLink="/nuestra-calidad"/>
                <LinksMainMenu nameLink="Contacto" hrefLink="/contacto"/>

            </div>

            <div className={mainMenuStyles.boxIconsMainMenu}>

                {/* Link a Maps */}
                <Link className={`${mainMenuStyles.iconLink} ${mainMenuStyles.iconDfault}`} href="/contacto"> 
                    <img src="/IconsMainMenu/IconMapsA.svg" alt="Maps"/> 
                    <img src="/IconsMainMenu/IconMapsB.svg" alt="Maps"/> 
                </Link>
                
                {/* Link a Tienda */}
                <Link className={`${mainMenuStyles.iconLink} ${mainMenuStyles.iconDfault}`} href="/tienda-online"> 
                    <img src="/IconsMainMenu/IconShoppingBagA.svg" alt="Carrito"/> 
                    <img src="/IconsMainMenu/IconShoppingBagB.svg" alt="Carrito"/> 
                </Link  >

                {/* Link a Tienda */}

                <Link className={`${mainMenuStyles.iconLink} ${mainMenuStyles.iconDfault}`} href="/carrito"> 
                    <img src="/IconsMainMenu/IconCarA.svg" alt="Carrito de Compras"/> 
                    <img src="/IconsMainMenu/IconCarB.svg" alt="Carrito de Compras"/> 
            
                </Link>

            </div>

        </div>

  
        <BotonWhatsApp />

    </nav>
  
  );
}
