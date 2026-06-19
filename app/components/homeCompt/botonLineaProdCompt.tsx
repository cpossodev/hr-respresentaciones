"use client"

// Import Link
import Link from 'next/link';

// Import Css
import btnLineaProdStyle from '../../styles/botonLineaProdCompt.module.css'

export default function BotonLineaProdCompt(
    {   bkUrlImagen, 
        hrefLinkToPage,
        nameLinkBoton, 
        titleLineaProd,
        filtroProd
    }: 
        
    {   bkUrlImagen: string, 
        hrefLinkToPage: string,
        nameLinkBoton: string, 
        titleLineaProd: React.ReactNode,
        filtroProd: number }) {

    return(

        <div className={btnLineaProdStyle.containerBoton}>

            <div className={btnLineaProdStyle.boxBkImagenBoton} style={{backgroundImage: `url(${bkUrlImagen})`}}>

                <Link className={btnLineaProdStyle.linkToPageLp} href={hrefLinkToPage}>
                        {nameLinkBoton}
                </Link>

            </div>

            <div className={btnLineaProdStyle.boxTitleLProd}>
                <p className={btnLineaProdStyle.titleLineaProd}>{titleLineaProd}</p>
            </div>

        </div>

    );
}