
"use client"

//Import Link
import Link from 'next/link';

// Import React
import {useEffect, useState} from 'react'

// Import CSS
import marcasLideresStyles from '../../styles/calidadStyles/sectMarcasLideresCalidad.module.css'

export default function SectMarcasLideresCalidad() {

    const [animateOn, setAnimeteOn] = useState(false);

        useEffect(() => {
            const handleScroll = () => {
            const scrollTop = window.scrollY;
            const viewport = window.innerWidth;
    
            // Caso escritorio
            if (viewport >= 580 && scrollTop >= 300) {
            setAnimeteOn(true);
            }

            // Caso móvil
            if (viewport < 580 && scrollTop >= 300) {
            setAnimeteOn(true);
            }

            };

            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }, []);


    return(

            <div className={marcasLideresStyles.allSectMarcasLideres}>


                <div className={marcasLideresStyles.boxContentML}>

                    {/* BOX CONTENDOR DEL TEXTOS */}
                    <div className={marcasLideresStyles.boxInfoTextML}>

                        <div className={`${animateOn === true ? marcasLideresStyles.boxTitleML: marcasLideresStyles.ActiveAnimateBoxTitleML}`}>

                            <p className={marcasLideresStyles.titleTextML}>
                                REPRESENTAMOS A MARCAS LÍDERES A NIVEL MUNDIAL
                            </p>

                        </div>


                        <div className={`${animateOn === true ? marcasLideresStyles.boxTextParrafoML: marcasLideresStyles.ActiveAnimateBoxTitleML}`}>

                            <p className={marcasLideresStyles.parrafoTextML}>
                                En HR Representaciones trabajamos con fabricantes 
                                reconocidos mundialmente como:  
                                <span className={marcasLideresStyles.TextoSubrayadoML}>
                                    Macherey-nagel, Boeco, Velp, Jp Selecta, 3B Scientific, Heathrow Scientific, 
                                    Apera, Elitech, Isolab, Alla france, Milwaukee, Arco y AHN.
                                </span> 
                                Estas marcas son sinónimo de innovación y desarrollo tecnológico, ofreciendo 
                                soluciones científicas que responden a las necesidades de laboratorios, 
                                industrias y centros educativos de alto nivel.
                            </p>

                        </div>


                    </div>

                    {/* BOX CONTENDOR IMAGEN */}
                    <div className={marcasLideresStyles.boxBackPhotoML} 
                        style={{backgroundImage: `url("/calidadAssets/backSectMarcasLideres.jpg")`}}>

                        <div className={marcasLideresStyles.boxColorPhotoML}></div>


                    </div>

                </div>


                <div className={marcasLideresStyles.boxLinkToTiendaML}>

                    {/* BUTTON A TIENDA */}
                    <Link href='/tienda-online' className={marcasLideresStyles.LinkToTiendML}>
                        <p className={marcasLideresStyles.textLink}>Visita la Tienda</p>
                        <img className={marcasLideresStyles.IconCarTienda} src="/IconsMainMenu/IconShoppingBagA.svg" alt="Visita La Tienda" />
                    
                    </Link>

                </div>


            </div>


    );
}