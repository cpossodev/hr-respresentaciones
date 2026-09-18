
//Import CSS
import sOrdenarStyles from './selectOrdenar.module.css'



export default function SelectOrdenarCompt() {

    return(

        <div className={sOrdenarStyles.boxContentSelectOrdenar}>

                <div className={sOrdenarStyles.boxTitleOrdenar}>
                    <p className={sOrdenarStyles.titleOrdenar}>Ordenar Por:</p>
                </div>

                <div className={sOrdenarStyles.boxSelectOrdenar}>

                    <select className={sOrdenarStyles.selectOdenar}>

                        <option value="Marca-Fabricante">Marca / Fabricante</option>
                        <option value="Tipo-producto">Tipo de Producto</option>
                        <option value="Uso-Aplicación-Industria">Uso Aplicación / Indistria</option>
            
                    </select>

                </div>

        </div>

    );
}