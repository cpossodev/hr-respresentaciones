
// Import Css
import boxMarcasHRStyles from '../../../styles/homeStyles/boxMarcasHR.module.css'

//Import Components
import BtnMarcasHRcompt from './btnMarcasHRcompt';


export default function BoxMarcasHR() {
    return(

            <div className={boxMarcasHRStyles.contentMarcasHR}>

                <div className={boxMarcasHRStyles.boxTitleTextMarcasHR}>

                    <h2 className={boxMarcasHRStyles.titleMarcasHR}>NUESTRAS MARCAS</h2>
                    <p className={boxMarcasHRStyles.textMarcasHR}>
                        Somos distribuidores directos y representantes 
                        de las marcas más reconocidas a nivel mundial
                    </p>

                </div>

                <div className={boxMarcasHRStyles.contentLogosMarcas}>

                         {/* Marca Marheray Nagel */}
                        <BtnMarcasHRcompt
                            hRefButton="/tienda-online"
                            urlImagenLogo="/logoMarcasFabricantes/logo-Macherey-Nagel.svg"
                            idMarca={1}

                        />

                        {/* Marca Marheray Nagel */}
                        <BtnMarcasHRcompt
                            hRefButton="/tienda-online"
                            urlImagenLogo="/logoMarcasFabricantes/logo-Boeco.svg"
                            idMarca={2} 
                        />

                        {/* Marca Marheray Nagel */}
                        <BtnMarcasHRcompt
                            hRefButton="/tienda-online"
                            urlImagenLogo="/logoMarcasFabricantes/logo-Insolab.svg"
                            idMarca={3}
                        />

                        {/* Marca Marheray Nagel */}
                        <BtnMarcasHRcompt
                            hRefButton="/tienda-online"
                            urlImagenLogo="/logoMarcasFabricantes/logo-Allan-France.svg"
                            idMarca={4}
                        />

                        {/* Marca Marheray Nagel */}
                        <BtnMarcasHRcompt
                            hRefButton="/tienda-online"
                            urlImagenLogo="/logoMarcasFabricantes/logo-2MMM-Group.svg"
                            idMarca={5}
                        />

                        {/* Marca Marheray Nagel */}
                        <BtnMarcasHRcompt
                            hRefButton="/tienda-online"
                            urlImagenLogo="/logoMarcasFabricantes/logo-AHN.svg"
                            idMarca={6}
                        />

                        {/* Marca Marheray Nagel */}
                        <BtnMarcasHRcompt
                            hRefButton="/tienda-online"
                            urlImagenLogo="/logoMarcasFabricantes/logo-Elitech.svg"
                            idMarca={7}
                        />  

                        {/* Marca Marheray Nagel */}
                        <BtnMarcasHRcompt
                            hRefButton="/tienda-online"
                            urlImagenLogo="/logoMarcasFabricantes/logo-Milwaukee.svg"
                            idMarca={8}
                        />

                        {/* Marca Marheray Nagel */}
                        <BtnMarcasHRcompt
                            hRefButton="/tienda-online"
                            urlImagenLogo="/logoMarcasFabricantes/logo-Arco.svg"
                            idMarca={9}
                        />


                        {/* Marca Marheray Nagel */}
                        <BtnMarcasHRcompt
                            hRefButton="/tienda-online"
                            urlImagenLogo="/logoMarcasFabricantes/logo-Selecta.svg"
                            idMarca={10}    
                        />

                        {/* Marca Marheray Nagel */}
                        <BtnMarcasHRcompt
                            hRefButton="/tienda-online"
                            urlImagenLogo="/logoMarcasFabricantes/logo-Omsons.svg"
                            idMarca={11}
                        />

                        {/* Marca Marheray Nagel */}
                        <BtnMarcasHRcompt
                            hRefButton="/tienda-online"
                            urlImagenLogo="/logoMarcasFabricantes/logo-Apera-Instrument.svg"
                            idMarca={12}
                        />


                         {/* Marca Marheray Nagel */}
                        <BtnMarcasHRcompt
                            hRefButton="/tienda-online"
                            urlImagenLogo="/logoMarcasFabricantes/logo-Biobase.svg"
                            idMarca={13}
                        />

                        {/* Marca Marheray Nagel */}
                        <BtnMarcasHRcompt
                            hRefButton="/tienda-online"
                            urlImagenLogo="/logoMarcasFabricantes/logo-velp.svg"
                            idMarca={14}
                        />

                        {/* Marca Marheray Nagel */}
                        <BtnMarcasHRcompt
                            hRefButton="/tienda-online"
                            urlImagenLogo="/logoMarcasFabricantes/logo-Francaice Instrument.svg"
                            idMarca={15}
                        />


                        {/* Marca Marheray Nagel */}
                        <BtnMarcasHRcompt
                            hRefButton="/tienda-online"
                            urlImagenLogo="/logoMarcasFabricantes/logo-Biobase.svg"
                            idMarca={16}
                        />

                </div>



            </div>

    );
}