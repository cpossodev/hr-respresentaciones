
// Impor Link
import Link from 'next/link';

// Import Css
import btnSvPtVentStyle from '../../../styles/homeStyles/btnServPostVent.module.css'

export default function BtnServPostVent

    ({  setIdButton,
        popUpOpen, 
        srcIconPostvent, 
        textPostVent}:

    {   setIdButton: () => void,
        popUpOpen: () => void, 
        srcIconPostvent: string, 
        textPostVent: string
    
    }) {

    return(


        <button onClick={() => {
                popUpOpen();      
                setIdButton();   
            }}
     
                className={btnSvPtVentStyle.boxBTNSvPostVent}>

               <img src={srcIconPostvent} className={btnSvPtVentStyle.IconPostVent} />

                <p className={btnSvPtVentStyle.textPostVent}>{textPostVent}</p>

                <img src="/IconsPostventas/Icon-CheckII.svg" className={btnSvPtVentStyle.IconCheck} />

        </button>

    );
}