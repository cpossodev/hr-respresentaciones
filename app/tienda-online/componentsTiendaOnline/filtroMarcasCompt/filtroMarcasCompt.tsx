//Import CSS
import filtroMarcasStyles from './filtroMarcasCompt.module.css'

//Import Components
import BtnMarcasFiltros from './btnfiltroMarcasCompt';

interface FiltroMarcasComptProps {
  onMarcaSelect: (marca: string) => void;
}




export default function FiltroMarcasCompt({ onMarcaSelect }: FiltroMarcasComptProps) {
    return(

        <div className={filtroMarcasStyles.contentAllFiltroMarcas}>

                <div className={filtroMarcasStyles.boxTitleFiltroMarcas}>
                    <p className={filtroMarcasStyles.titleFiltroMarcas}>Encuentra los productos de nuestras principales marcas:</p>
                </div>
            
                <div className={filtroMarcasStyles.boxContentBtnFiltrosMarcas}>

                    {/* Botón 1 Macherey Nagel */}
                    <BtnMarcasFiltros
                    
                    imgURL="/logoMarcasFabricantes/logoFiltrosEdition/logo-macherey-nagel.svg" 
                    nameAlt="Macherey Nagel"  
                    onClick={onMarcaSelect}             
                    
                    />

                    {/* Botón 2 Boeco */}
                    <BtnMarcasFiltros
                    
                    imgURL="/logoMarcasFabricantes/logoFiltrosEdition/logo-boeco.svg" 
                    nameAlt="Boeco"     
                    onClick={onMarcaSelect}          
                    
                    />

                    {/* Botón 3 AHN */}
                    <BtnMarcasFiltros
                    
                    imgURL="/logoMarcasFabricantes/logoFiltrosEdition/logo-AHN.svg" 
                    nameAlt="AHN"    
                    onClick={onMarcaSelect}           
                    
                    />

                    {/* Botón 4 Allan France */}
                    <BtnMarcasFiltros
                    
                    imgURL="/logoMarcasFabricantes/logoFiltrosEdition/logo-allan-france.svg" 
                    nameAlt="Allan France"     
                    onClick={onMarcaSelect}          
                    
                    />

                    {/* Botón 5 Milwake */}
                    <BtnMarcasFiltros
                    
                    imgURL="/logoMarcasFabricantes/logoFiltrosEdition/logo-melwakee.svg" 
                    nameAlt="Milwake"     
                    onClick={onMarcaSelect}          
                        
                        />

                    {/* Botón 6 Isolab */}
                    <BtnMarcasFiltros
                    
                    imgURL="/logoMarcasFabricantes/logoFiltrosEdition/logo-isolab.svg" 
                    nameAlt="Isolab"               
                    onClick={onMarcaSelect}
                    
                    />

                </div>

            </div>

    );
}