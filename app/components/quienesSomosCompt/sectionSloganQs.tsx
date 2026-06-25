
"use client"

//Import Link
import Link from 'next/link';
import { useEffect, useState } from "react";


//Import Css
import sloganQSstyles from '../../styles/quienesSomosStyles/sectionSloganQs.module.css'


export default function SectionSloganQS() {


    const [animateON, setAnimateON] = useState(false);

        useEffect(() => {
            const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop >= 500) {
                setAnimateON(true); // activa animación
            }
            };

            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }, []);


    return(

            <div className={sloganQSstyles.AllSectSloganQS}>

                <div className={sloganQSstyles.boxContentSloganQS}>

                    {/* BOX GRADIENT */}
                    <div className={`${animateON === true ? sloganQSstyles.backBoxGradientQS: "" }`}></div>

                    {/* BOX CON SLOGAN Y BONTÓN */}
                    <div className={`${animateON === true ? sloganQSstyles.boxSloganQS: "" }`}>
         
                        <div className={`${animateON === true ? sloganQSstyles.boxTextQS: sloganQSstyles.opacityStart }`}>
                                <p>SOMOS</p>
                                <p>{<>CONFIANZA,<br/>CALIDAD,<br/>Y GARANTÍA</>}</p>
                            </div>      

                            <Link href="/calidad" className={`${animateON === true ? sloganQSstyles.linkTOCalidadFromQS: sloganQSstyles.opacityStart }`}>
                                Conoce Más
                            </Link>
                        </div>

                    {/* // BOX CONTENT IMAGEN BK */}
                    <div className={`${animateON === true ? sloganQSstyles.bkImagenBOXqs: "" }`} style={{backgroundImage: `url("/bkQuienesSomos/bkQsServicio5.jpg")`}}>

                    </div>

                </div>

            </div>

    );


}