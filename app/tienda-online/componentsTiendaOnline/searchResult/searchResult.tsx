//Import Css
import searchResultStyles from './searchResult.module.css'

export default function SearchResult (
    
    {   textMarcaRB, 
        TipoProdRB, 
        TipoIndustRB 
    } : 

    {   
        textMarcaRB: string,  
        TipoProdRB:string, 
        TipoIndustRB:string }
    ) 
    
    {

    return(
        <div className={searchResultStyles.boxContentResultBusq}>

            <h2 className={searchResultStyles.titleResultBusq}>Resultado de Búsqueda</h2>

            <div className={searchResultStyles.boxTextResultBusq}>

                <p className={searchResultStyles.textMarca_RBusq}>Marca: {textMarcaRB}</p>
                <p className={searchResultStyles.textTipoProd_RBusq}>Tipo de Producto: {TipoProdRB}</p>
                <p className={searchResultStyles.textTipoIndust_RBusq}> Tipo de Industria: {TipoIndustRB}</p>

            </div>

        </div>
    );
}