
// Import Css
import boxMarcasHRStyles from '../../styles/boxMarcasHR.module.css'

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
                            urlImagenLogo="/logoMarcasFabricantes/logo-Apera-Instrument.svg"

                        />

                        {/* Marca Marheray Nagel */}
                        <BtnMarcasHRcompt
                            hRefButton="/tienda-online"
                            urlImagenLogo="/logoMarcasFabricantes/logo-2MMM-Group.svg"

                        />

                        {/* Marca Marheray Nagel */}
                        <BtnMarcasHRcompt
                            hRefButton="/tienda-online"
                            urlImagenLogo="/logoMarcasFabricantes/logo-Biobase.svg"

                        />

                        {/* Marca Marheray Nagel */}
                        <BtnMarcasHRcompt
                            hRefButton="/tienda-online"
                            urlImagenLogo="/logoMarcasFabricantes/logo-Elitech.svg"

                        />

                        {/* Marca Marheray Nagel */}
                        <BtnMarcasHRcompt
                            hRefButton="/tienda-online"
                            urlImagenLogo="/logoMarcasFabricantes/logo-Francaice Instrument.svg"

                        />

                        {/* Marca Marheray Nagel */}
                        <BtnMarcasHRcompt
                            hRefButton="/tienda-online"
                            urlImagenLogo="/logoMarcasFabricantes/logo-Insolab.svg"

                        />

                        {/* Marca Marheray Nagel */}
                        <BtnMarcasHRcompt
                            hRefButton="/tienda-online"
                            urlImagenLogo="/logoMarcasFabricantes/logo-Macherey-Nagel.svg"

                        />

                        {/* Marca Marheray Nagel */}
                        <BtnMarcasHRcompt
                            hRefButton="/tienda-online"
                            urlImagenLogo="/logoMarcasFabricantes/logo-Milwaukee.svg"

                        />

                        {/* Marca Marheray Nagel */}
                        <BtnMarcasHRcompt
                            hRefButton="/tienda-online"
                            urlImagenLogo="/logoMarcasFabricantes/logo-Selecta.svg"

                        />


                        {/* Marca Marheray Nagel */}
                        <BtnMarcasHRcompt
                            hRefButton="/tienda-online"
                            urlImagenLogo="/logoMarcasFabricantes/logo-Insolab.svg"

                        />

                        {/* Marca Marheray Nagel */}
                        <BtnMarcasHRcompt
                            hRefButton="/tienda-online"
                            urlImagenLogo="/logoMarcasFabricantes/logo-Elitech.svg"

                        />

                        {/* Marca Marheray Nagel */}
                        <BtnMarcasHRcompt
                            hRefButton="/tienda-online"
                            urlImagenLogo="/logoMarcasFabricantes/logo-Apera-Instrument.svg"

                        />


                         {/* Marca Marheray Nagel */}
                        <BtnMarcasHRcompt
                            hRefButton="/tienda-online"
                            urlImagenLogo="/logoMarcasFabricantes/logo-2MMM-Group.svg"

                        />

                        {/* Marca Marheray Nagel */}
                        <BtnMarcasHRcompt
                            hRefButton="/tienda-online"
                            urlImagenLogo="/logoMarcasFabricantes/logo-Apera-Instrument.svg"

                        />

                        {/* Marca Marheray Nagel */}
                        <BtnMarcasHRcompt
                            hRefButton="/tienda-online"
                            urlImagenLogo="/logoMarcasFabricantes/logo-Francaice Instrument.svg"

                        />


                        {/* Marca Marheray Nagel */}
                        <BtnMarcasHRcompt
                            hRefButton="/tienda-online"
                            urlImagenLogo="/logoMarcasFabricantes/logo-Biobase.svg"

                        />

                </div>



            </div>

    );
}