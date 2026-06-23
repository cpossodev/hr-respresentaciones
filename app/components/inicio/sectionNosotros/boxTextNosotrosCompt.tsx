"use client"

// Import Css
import boxTNComptStyles from '../../../styles/homeStyles/boxTextNosotrosCompt.module.css'

 

export default function BoxTextNosotros({titleBox, textParrafo,}: {titleBox:string,  textParrafo: string}) {
    return(

            <div className={boxTNComptStyles.contentTextNosotros}>

                <h2 className={boxTNComptStyles.titleNosotros}> {titleBox}</h2>
                <p className={boxTNComptStyles.parrafoNosotros}> {textParrafo} </p>

            </div>

    );
}


