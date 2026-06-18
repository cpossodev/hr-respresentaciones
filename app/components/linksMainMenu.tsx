
"use client";

// import Css
import linksMainMenuStyles from "../styles/linksMainMenu.module.css";
import Link from "next/link";

export default function LinksMainMenu({nameLink, hrefLink}: {nameLink: string, hrefLink: string}) {
    return (

        <Link className={linksMainMenuStyles.linkContent} href={hrefLink}>
            <div className={linksMainMenuStyles.nameLinkContent}><p className={linksMainMenuStyles.nameLink}>{nameLink}</p></div> 
            <div className={linksMainMenuStyles.underLineActive}></div>
        </Link>



    );
}