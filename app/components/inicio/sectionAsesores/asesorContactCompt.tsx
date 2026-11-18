
"use client"


// Import Css
import asesorContactStyles from '../../../styles/homeStyles/asesorContactCompt.module.css';

//Import Link
import Link from 'next/link';

export default function AsesorContactCompt(
    
    {   urlBkImgAsesor, 
        nameAsesor, 
        cargoAsesor,
        whatsAppAsesor }:
        
    {   urlBkImgAsesor: string, 
        nameAsesor: string, 
        cargoAsesor: string,  
        whatsAppAsesor: string }) {



  const mensaje = encodeURIComponent(
    `Estimado ${nameAsesor},

        Me contacto desde la página web de HR Representaciones para solicitar información y asesoría sobre sus productos.

        Quedo atento a sus comentarios.

        Muchas gracias.`

    );

    const urlWtsAsesor = `https://api.whatsapp.com/send/?phone=${whatsAppAsesor}&text=${mensaje}`;


    return(

        <div className={asesorContactStyles.contactBoxAsesor} > 
        
            <div className={asesorContactStyles.boxImagenAsesor} style={{ backgroundImage: `url(${urlBkImgAsesor})`}}>

            </div>

            <div className={asesorContactStyles.boxNameText}>

                <p className={asesorContactStyles.nameAsesor}>{nameAsesor}</p>
                <p className={asesorContactStyles.cargoAsesor}>{cargoAsesor}</p> 

            </div>

            <a className={asesorContactStyles.linkToWtsAsesor} href={urlWtsAsesor} target="_blank" rel="noopener noreferrer">
                <span className={asesorContactStyles.boxTextBotton}><p>Contáctame</p><img src={"/imgAsesores/Icon-Whatsapp.svg"}/> </span>
            </a>

            
        </div>

    );
}