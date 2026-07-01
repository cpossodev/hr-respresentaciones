
"use client";
import { usePathname } from "next/navigation";

// import Css
import linksMainMenuStyles from "../../styles/homeStyles/linksMainMenu.module.css";
import Link from "next/link";

export default function LinksMainMenu({nameLink, hrefLink}: {nameLink: string, hrefLink: string}) {

  const pathname = usePathname();


    // 🔹 Definimos clases según la ruta
    let extraClass = "";
    switch (pathname) {
        case "/":
        extraClass = linksMainMenuStyles.homeActive;
        break;
        case "/quienes-somos":
        extraClass = linksMainMenuStyles.aboutActive;
        break;
        case "/nuestra-calidad":
        extraClass = linksMainMenuStyles.calidadActive;
        break;
        case "/contacto":
        extraClass = linksMainMenuStyles.contactActive;
        break;
        default:
        extraClass = "";
    }



    return (

        <Link className={linksMainMenuStyles.linkContent} href={hrefLink}>

            <div className={linksMainMenuStyles.nameLinkContent}>
                <p className={`${linksMainMenuStyles.nameLink}
                ${pathname === hrefLink ? extraClass : ""}`}>{nameLink}</p>

            </div> 

            <div className={linksMainMenuStyles.underLineActive}></div>
        </Link>



    );
}