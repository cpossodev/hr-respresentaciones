import Link from 'next/link';


// Import CSS
import btnMarcasHRStyles from '../../../styles/homeStyles/btnMarcasHRcompt.module.css';


export default function BtnMarcasHRcompt({hRefButton, urlImagenLogo}: {hRefButton: string, urlImagenLogo: string}) {
    return(


            <Link href={hRefButton}  className={btnMarcasHRStyles.boxBtnMarcasHR}> 
            
                <div className={btnMarcasHRStyles.boxLogoMarcasHR}>
                    <img src={urlImagenLogo} className={btnMarcasHRStyles.logoMarcasHR}></img>
                </div>

                <div className={btnMarcasHRStyles.boxlinkToProducts}>
                    <p>Conoce sus productos</p>
                    <span className={`material-symbols-outlined ${btnMarcasHRStyles.arrowBtn}`}>keyboard_arrow_right</span>
                </div>
            
            </Link>


    );
}