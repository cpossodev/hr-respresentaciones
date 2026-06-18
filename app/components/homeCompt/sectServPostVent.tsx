"use client"

//Import Next
import { useState } from 'react';
// Import Css
import svPtVentStyles from '../../styles/sectServPostVent.module.css'

// Import Component
import BtnServPostVent from './btnServPostVent';
import PopUPsvPostVentComp from './popUPsvPostVentComp'


export default function SectServPostVent() {

        const [popUp, setPopUp] = useState(false);
        const [idButton, setIdButton] = useState(0);


    return(

    <div className={svPtVentStyles.contSectServPostVent}>


        {/* //////////////////// ---------- POP UP -------------- //////////////////// */}
       
        <PopUPsvPostVentComp
            idButton = {idButton}
            openClosePopUP={popUp}
            onClose={() => setPopUp(false)} 

         />


        {/* /////////////// ------------------ CLOSE POP UP --------------------- ////////////////// */}

        <div className={svPtVentStyles.boxTitleServPostVent}>

            <h2 className={svPtVentStyles.titleServPostVent}>SERVICIO INTEGRAL POST VENTA</h2>
        
        </div>

        <div className={svPtVentStyles.boxServPostVent}>


                    <BtnServPostVent 
                    setIdButton = {() => setIdButton(0)} 
                    popUpOpen={() => setPopUp(true)}
                    srcIconPostvent = "/IconsPostventas/Icon-Asesoramiento.svg"
                    textPostVent = "Asesoramiento Personalizado"
                
                />

                    <BtnServPostVent 
                    setIdButton = {() => setIdButton(1)} 
                    popUpOpen={() => setPopUp(true)}
                    srcIconPostvent = "/IconsPostventas/Icon-Serv-Tecnico.svg"
                    textPostVent = "Servicio Técnico Post Venta"
                
                />

                    <BtnServPostVent 
                    setIdButton = {() => setIdButton(2)} 
                    popUpOpen={() => setPopUp(true)}
                    srcIconPostvent = "/IconsPostventas/Icon-Capacitacion.svg"
                    textPostVent = "Capacitación y Soporte Especializado"
                
                />

                    <BtnServPostVent 
                    setIdButton = {() => setIdButton(3)} 
                    popUpOpen={() => setPopUp(true)}
                    srcIconPostvent = "/IconsPostventas/Icon-Satisfaccion.svg"
                    textPostVent = "Satisfacción Garantizada"
                
                />



        </div>


    </div>




    );
}