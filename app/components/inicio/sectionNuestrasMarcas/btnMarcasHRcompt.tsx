import Link from 'next/link';


// Import CSS
import btnMarcasHRStyles from '../../../styles/homeStyles/btnMarcasHRcompt.module.css';


export default function BtnMarcasHRcompt({hRefButton, urlImagenLogo, idMarca}: {hRefButton: string, urlImagenLogo: string, idMarca?: number | string}) {

   const nameMarca2 = (() => {
    switch (Number(idMarca)) {
        case 1:
            return "Macherey_Nagel";
        case 2:
            return "Boeco";
        case 3:
            return "Insolab";
        case 4:
            return "Allan_France";
        case 5:
            return "2MMM_Group";
        case 6:
            return "AHN";
        case 7:
            return "Elitech";
        case 8:
            return "Milwaukee";
        case 9:
            return "Arco";
        case 10:
            return "Selecta";
        case 11:
            return "Omsons";
        case 12:
            return "Apera_Instrument";
        case 13:
            return "Biobase";
        case 14:
            return "Velp";
        case 15:
            return "Francaice_Instrument";
        case 16:
            return "Biobase";
        default:
            return "Marca_General";
    }
})();
    return(

        

            <Link href={hRefButton}  className={btnMarcasHRStyles.boxBtnMarcasHR}> 
            
                <div className={btnMarcasHRStyles.boxLogoMarcasHR}>
                    <img src={urlImagenLogo} className={`${btnMarcasHRStyles[nameMarca2]} ${btnMarcasHRStyles.logoMarcasHR}`}></img>
                </div>

                <div className={btnMarcasHRStyles.boxlinkToProducts}>
                    <p>Conoce sus productos</p>
                    <span className={`material-symbols-outlined ${btnMarcasHRStyles.arrowBtn}`}>keyboard_arrow_right</span>
                </div>
            
            </Link>


    );
}